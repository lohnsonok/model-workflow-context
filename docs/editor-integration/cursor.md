# Cursor Integration

Cursor features a native **Rules and Commands** system that allows you to define project-specific instructions and reusable commands.

## Current Native Support
As seen in the Cursor UI:
1.  **Access**: Click the **Settings (gear icon)** in the top right of the sidebar, or use **Cmd+Shift+J**.
2.  **Rules and Commands**: Navigate to the **Rules and Commands** section in the settings.
3.  **Project Rules**: Add rules to help the agent understand conventions in your specific project directory.
4.  **Project Commands**: Create custom commands specific to your workspace.
5.  **User Commands**: Reuse personal commands across different projects (stored in `~/.cursor/commands`).

## MWC to Cursor Mapping
MWC workflows can be used to populate Cursor's commands and rules:
- **MWC Inputs** map to Cursor command arguments.
- **MWC Steps** map to the instructions within a Cursor command or rule.
- To use an MWC workflow:
  1. Open the `.mwc.yaml` file.
  2. Click **Add Command** in Cursor Settings.
  3. Copy the MWC `description` into the command description and the `steps` into the instructions.

## Proposed Automation
Future MWC tools could automatically generate Cursor `.cursorrules` or command JSON files from your `.mwc.yaml` definitions.
