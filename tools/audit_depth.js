const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function auditDepth(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  const workflows = files.filter(f => f.endsWith('.mwc.yaml'));
  
  console.log(`Auditing ${workflows.length} workflows...\n`);
  
  workflows.forEach(file => {
    const fullPath = path.join(dir, file);
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const wf = yaml.load(content);
      
      const stepCount = wf.steps ? wf.steps.length : 0;
      let totalPromptLength = 0;
      if (wf.steps) {
        wf.steps.forEach(s => {
          if (s.prompt) totalPromptLength += s.prompt.length;
        });
      }
      
      // Heuristic for "weak" workflow
      if (stepCount < 2 || totalPromptLength < 100) {
         console.log(`[WEAK] ${file}: ${stepCount} steps, ${totalPromptLength} chars prompt`);
      }
    } catch (e) {
      console.error(`Error reading ${file}: ${e.message}`);
    }
  });
}

auditDepth(process.cwd());
