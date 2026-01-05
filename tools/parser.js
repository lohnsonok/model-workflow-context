const fs = require('fs');
const yaml = require('js-yaml');

function parseWorkflow(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
      return yaml.load(content);
    } else if (filePath.endsWith('.json')) {
      return JSON.parse(content);
    }
    throw new Error('Unsupported file format');
  } catch (error) {
    console.error(`Error parsing workflow ${filePath}: ${error.message}`);
    return null;
  }
}

function resolveTemplates(text, context) {
  return text.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();
    return context[trimmedKey] !== undefined ? context[trimmedKey] : match;
  });
}

module.exports = { parseWorkflow, resolveTemplates };
