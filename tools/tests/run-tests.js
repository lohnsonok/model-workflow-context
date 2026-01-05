const { validateWorkflow } = require('../validator');
const path = require('path');

const examples = [
  '../../spec/v1.0/examples/basic-workflow.mwc.yaml',
  '../../spec/v1.0/examples/complex-workflow.mwc.yaml',
  '../../workflows/code-review/standard-review.mwc.yaml',
  '../../workflows/code-review/security-audit.mwc.yaml',
  '../../workflows/documentation/api-docs-generator.mwc.yaml',
  '../../workflows/documentation/changelog-auto.mwc.yaml',
  '../../workflows/testing/unit-tests.mwc.yaml',
  '../../workflows/testing/e2e-tests.mwc.yaml',
  '../../workflows/deployment/deploy-staging.mwc.yaml',
  '../../workflows/deployment/deploy-production.mwc.yaml',
  '../../workflows/refactoring/modernize-code.mwc.yaml',
  '../../workflows/setup/init-project.mwc.yaml'
];

let allPassed = true;

console.log('Running MWC Workflow Validation Tests...');

examples.forEach(examplePath => {
  const absolutePath = path.join(__dirname, examplePath);
  if (!validateWorkflow(absolutePath)) {
    allPassed = false;
  }
});

if (allPassed) {
  console.log('All tests passed!');
  process.exit(0);
} else {
  console.error('Some tests failed.');
  process.exit(1);
}
