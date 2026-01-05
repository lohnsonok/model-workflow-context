# Windsurf Integration

Windsurf features a native **Workflows** system within its **Cascade** agent. Workflows in Windsurf are essentially "saved prompts" that can be triggered quickly.

## Current Native Support
As seen in the Windsurf UI:
1.  **Access**: Click the "Rules, Memories & Workflows" icon in the Cascade sidebar.
2.  **Management**: Navigate to **Customizations > Workflows**.
3.  **Creation**: You can add "Global" or "Workspace" workflows.
4.  **Trigger**: Type `/` in the Cascade chat to see and execute your saved workflows.

## MWC to Windsurf Mapping
MWC aims to provide a structured way to share these workflows. Currently, you can:
- Copy the `prompt` from an `.mwc.yaml` file.
- Create a new Workflow in Windsurf (**Customizations > Workflows > + Workspace**).
- Paste the prompt and give it a name.
- Trigger it using `/name` in Cascade.

## Proposed Automation
In the future, MWC tools could automatically sync `.mwc.yaml` files from your repository directly into Windsurf's workspace workflows.
