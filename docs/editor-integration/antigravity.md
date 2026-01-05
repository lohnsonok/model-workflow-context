# Antigravity Integration

Antigravity features a native **Workflows** system within its **Agent Manager**. Workflows in Antigravity are "saved prompts" that help orchestrate autonomous tasks.

## Current Native Support
As seen in the Antigravity UI:
1.  **Access**: Open the "Agent Manager" and click the three dots or settings icon to find **Customizations**.
2.  **Management**: Navigate to **Customizations > Workflows**.
3.  **Creation**: Use the **+ Global** or **+ Workspace** buttons to define new agent behaviors.
4.  **Trigger**: Type `/` in the Antigravity agent chat to trigger a specific workflow.

## MWC to Antigravity Mapping
MWC provides the structured definition for these agentic tasks. To use an MWC workflow in Antigravity:
- Open an `.mwc.yaml` file from this repository.
- Create a corresponding workflow in Antigravity's **Customizations** menu.
- Map the MWC `steps` and `prompts` into the Antigravity workflow definition.
- Use `/` in the chat to launch the agent on that mission.

## Future Vision
The MWC specification is designed to be the "source of truth" that could be automatically ingested by Antigravity to keep your agent's capabilities up to date with the community standard.
