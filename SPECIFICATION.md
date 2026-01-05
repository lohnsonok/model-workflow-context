# MWC Specification

This document defines the Model Workflow Context (MWC) standard.

## Overview
MWC is a structured format (YAML or JSON) for defining agentic workflows. These workflows consist of inputs, a sequence of steps (model calls, actions, formatting), and outputs.

## Workflow Structure

### Root Fields
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Human-readable name of the workflow. |
| `version` | string | Version of this specific workflow (e.g., "1.0.0"). |
| `description` | string | Brief explanation of what the workflow does. |
| `mwc_version` | string | The version of the MWC spec this workflow follows (e.g., "1.0.0"). |
| `inputs` | array | List of required inputs for the workflow. |
| `steps` | array | Sequence of operations to perform. |
| `outputs` | array | List of values produced by the workflow. |

### Inputs
Each input must have:
- `name`: Identifier for the input.
- `type`: Data type (`string`, `enum`, `boolean`, `path`).
- `description`: Usage instructions.

### Steps
Steps define the core logic. Supported types:
- `model_call`: Invoke an LLM with a prompt.
- `action`: Execute a predefined editor action (e.g., `create_comment`, `edit_file`).
- `format`: Transform data (e.g., using a markdown template).

### Outputs
Outputs define what is returned or saved at the end of the workflow.

## Versioning
MWC uses Semantic Versioning (SemVer) for both the specification and individual workflows.

## Examples
See the [spec/v1.0/examples/](spec/v1.0/examples/) directory for reference implementations.
