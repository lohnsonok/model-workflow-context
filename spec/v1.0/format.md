# MWC v1.0 Format Guide

This document provides detailed information about the MWC v1.0 file format.

## File Extension
MWC workflows should use the `.mwc.yaml` or `.mwc.json` extension. YAML is preferred for readability.

## YAML Structure
A typical MWC file follows this structure:

```yaml
name: "My Workflow"
version: "1.0.0"
mwc_version: "1.0.0"
description: "Brief description"

inputs:
  - name: my_input
    type: string
    description: "Input description"

steps:
  - id: step_one
    type: model_call
    prompt: "Prompt for the model using {{my_input}}"

outputs:
  - name: final_result
    type: string
```

## Template Variables
Use double curly braces `{{variable_name}}` to inject inputs or previous step results into prompts or templates.

## Step Types

### model_call
Used to send a prompt to an LLM.
- `prompt`: The text to send to the model.

### action
Used to trigger an editor-specific action.
- `action`: The name of the action (e.g., `create_file`, `search_codebase`).

### format
Used to format data into a specific structure.
- `template`: The template to use (e.g., `markdown`, `json`).
