# Claude Code Integration

Claude Code is a command-line interface that allows you to interact with Claude directly in your terminal. It supports specialized "subagents" and "plan mode" for complex workflows.

## Native Capabilities
Based on the `Common workflows.txt` documentation:
1.  **Subagents**: Claude Code can delegate tasks to specialized subagents (e.g., `code-reviewer`, `debugger`).
2.  **Custom Subagents**: You can create custom subagents in `.claude/agents/` to handle specific tasks.
3.  **Plan Mode**: Use `claude --permission-mode plan` to analyze codebases and create implementation plans without making changes.
4.  **Automatic Delegation**: Claude Code automatically uses appropriate subagents based on the task description.

## MWC to Claude Code Mapping
MWC workflows are highly compatible with Claude Code's subagent architecture:
- **MWC Categories** (like `code-review`) map to specialized **Subagents**.
- **MWC Steps** map to the **System Prompt** of a subagent.
- **MWC Inputs** map to the context provided when calling a subagent.

### Manual Usage
To use an MWC workflow as a Claude Code subagent:
1. Create a new subagent definition in `.claude/agents/`.
2. Use the MWC `description` and `steps` to define the subagent's role and behavior.
3. Invoke the subagent using `> use the [agent-name] subagent to [task]`.

## Proposed Automation
A future MWC tool could automatically export `.mwc.yaml` files as Claude Code subagent definitions in the `.claude/agents/` directory.
