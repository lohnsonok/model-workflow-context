# MWC API Reference

This document lists all available step types and actions in MWC v1.0.

## Step Types

### `model_call`
Executes a prompt using an LLM.
- **Inputs**: `prompt` (string).
- **Outputs**: The model's response (string).

### `action`
Triggers an editor-level action.
- **Inputs**: `action` (string), `inputs` (object).
- **Standard Actions**:
  - `create_file`: Create a new file.
  - `edit_file`: Modify an existing file.
  - `delete_file`: Delete a file.
  - `create_directory`: Create a directory.
  - `search_codebase`: Perform a semantic or keyword search.

### `format`
Formats data using a template.
- **Inputs**: `template` (string), `inputs` (object).

## Input Types
- `string`: A simple text string.
- `boolean`: A true/false value.
- `enum`: A value from a predefined list.
- `path`: A file or directory path.
