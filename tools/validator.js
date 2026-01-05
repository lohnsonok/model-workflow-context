const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { Validator } = require('jsonschema');

const schemaPath = path.join(__dirname, '../spec/v1.0/schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const v = new Validator();

function validateWorkflow(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let workflow;

    if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
      workflow = yaml.load(content);
    } else if (filePath.endsWith('.json')) {
      workflow = JSON.parse(content);
    } else {
      console.error(`Unsupported file extension for ${filePath}`);
      return false;
    }

    const validationResult = v.validate(workflow, schema);

    if (validationResult.errors.length > 0) {
      console.error(`Validation errors in ${filePath}:`);
      validationResult.errors.forEach(error => {
        console.error(` - ${error.stack}`);
      });
      return false;
    }

    console.log(`${filePath} is valid.`);
    return true;
  } catch (error) {
    console.error(`Error validating ${filePath}: ${error.message}`);
    return false;
  }
}

// If run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: node validator.js <path-to-workflow>');
    process.exit(1);
  }

  let allValid = true;
  args.forEach(arg => {
    if (!validateWorkflow(arg)) {
      allValid = false;
    }
  });

  process.exit(allValid ? 0 : 1);
}

module.exports = { validateWorkflow };
