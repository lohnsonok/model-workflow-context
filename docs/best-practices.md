# MWC Best Practices

To ensure your workflows are portable, maintainable, and effective, follow these best practices.

## Design Patterns

### Modular Steps
Break down complex tasks into smaller, logical steps. Instead of one giant prompt, use multiple `model_call` steps.

### Explicit Inputs
Always define all required inputs. Avoid relying on hardcoded strings within prompts when they could be inputs.

### Informative Metadata
Fill out the `metadata.json` for your category and provide a clear `README.md` in your workflow directory.

## Prompts

### Context is Key
Provide enough context in your prompts for the model to understand the task, but avoid unnecessary fluff.

### Structured Output
When a step's output is used by another step, consider asking the model for structured data (like JSON) or use the `format` step.

## Editor Compatibility
If your workflow uses `action` steps, be aware that different editors might support different action names. Document compatibility in `metadata.json`.

## Anti-Patterns
- **Hardcoding paths**: Use the `path` input type instead.
- **Vague descriptions**: "Analyze code" is less helpful than "Analyze code for memory leaks".
- **Circular dependencies**: Ensure steps follow a logical, non-circular sequence.
