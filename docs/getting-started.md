# Getting Started with MWC

Welcome to the Model Workflow Context (MWC) project! This guide will help you understand how to use and create workflows in just 5 minutes.

## What is MWC?
MWC is a standard for defining agentic workflows that work across different AI-powered editors like Cursor, Windsurf, and Antigravity.

## Installation
Currently, MWC is a specification and a collection of workflows. You can use the tools in the `tools/` directory to validate and parse workflows.

```bash
# Clone the repository
git clone https://github.com/your-repo/model-workflow-context.git
cd model-workflow-context

# Install dependencies for tools
cd tools && npm install
```

## Your First Workflow
1.  **Browse**: Look through the [workflows/](../workflows/) directory to find a workflow that fits your needs.
2.  **Run**: Most supported editors will have a way to import or run `.mwc.yaml` files.
3.  **Customize**: Copy an existing workflow and modify the `prompt` or `inputs` to suit your specific use case.

## Next Steps
- [Learn how to create workflows](creating-workflows.md)
- [Read the full specification](../SPECIFICATION.md)
