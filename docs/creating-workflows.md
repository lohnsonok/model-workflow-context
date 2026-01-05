# Creating MWC Workflows

This guide explains how to create your own MWC workflows.

## Workflow File Structure
A workflow is a YAML file with the following main sections:

1.  **Metadata**: Name, version, and description.
2.  **Inputs**: Parameters required to run the workflow.
3.  **Steps**: The actual logic (model calls, actions, formatting).
4.  **Outputs**: What the workflow returns.

## Step-by-Step Example

### 1. Define Metadata
```yaml
name: "My Custom Review"
version: "1.0.0"
mwc_version: "1.0.0"
description: "A custom review workflow"
```

### 2. Add Inputs
```yaml
inputs:
  - name: code
    type: string
    description: "The code to analyze"
```

### 3. Add Steps
```yaml
steps:
  - id: analyze
    type: model_call
    prompt: "Analyze this code for performance: {{code}}"
```

### 4. Define Outputs
```yaml
outputs:
  - name: report
    type: string
```

## Best Practices
- Use descriptive names for inputs and steps.
- Keep prompts clear and concise.
- Use the `validator.js` tool to check your workflow before submitting it.
