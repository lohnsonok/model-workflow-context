# Contributing to Model Workflow Context (MWC)

Thank you for your interest in contributing to MWC! This project aims to create a unified standard for AI workflows.

## How to Contribute

### 1. Adding New Workflows
If you have a workflow that would be useful to others:
1. Choose the appropriate category in `workflows/`.
2. Create a new directory if needed, or add your `.mwc.yaml` file to an existing one.
3. Ensure you include a `metadata.json` file in the category directory if it's new.
4. Validate your workflow using the provided tools: `node tools/validator.js path/to/your/workflow.mwc.yaml`.

### 2. Improving the Specification
Proposals for changes to the MWC specification should be submitted as Pull Requests:
1. Update the relevant files in `spec/`.
2. Update `SPECIFICATION.md` to reflect the changes.
3. Provide examples demonstrating the new features.

### 3. Reporting Bugs or Requesting Features
Please use the [GitHub Issue Templates](.github/ISSUE_TEMPLATE) to report bugs or suggest new features.

## Pull Request Process
1. Fork the repository and create your branch from `main`.
2. Ensure your code passes all validation tests.
3. Update the documentation if you're introducing new features.
4. Link your PR to any related issues.

## Code of Conduct
Please be respectful and collaborative in all interactions within this project.
