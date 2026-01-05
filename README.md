# Model Workflow Context (MWC)

Open standard for defining, sharing, and executing workflows across AI-powered editors.

## Quick Start
- [Getting Started](docs/getting-started.md)
- [Specification](SPECIFICATION.md)
- [Browse Workflows](workflows/)

## Supported Editors
- Cursor
- Windsurf
- Antigravity
- Claude Code
- (add yours)

## What is MWC?
MWC provides a unified format for defining agentic workflows that can be interpreted and executed by various AI-assisted development tools. It aims to standardize how we describe tasks, model calls, and tool interactions to ensure portability and reusability of complex development workflows.

### Why MWC for Agents (Claude Code, Cursor, etc.)?
- **Predictability**: Replace unpredictable long-form prompts with structured execution steps.
- **Portability**: Write your workflow once, run it in any supported AI editor.
- **Complexity**: Handle multi-domain tasks (BioTech, FinTech, Security) with expert-level guidance.

## Workflow Categories (105)
We offer a vast library of production-ready workflows covering every aspect of the tech lifecycle:

- **Core**: [Setup](workflows/setup/), [Architecture](workflows/architecture/), [Testing](workflows/testing/), [Refactoring](workflows/refactoring/), [Dev Tools](workflows/dev-tools/)
- **Infrastructure**: [DevOps](workflows/devops/), [Cloud Native](workflows/cloud-native/), [SRE](workflows/sre/), [FinOps](workflows/finops/), [GreenIT](workflows/green-it/)
- **Specialized**: [Mobile](workflows/mobile/), [Game Dev](workflows/game-dev/), [Embedded](workflows/embedded/), [Blockchain](workflows/blockchain/), [Spatial Computing](workflows/spatial-computing/), [Robotics](workflows/robotics/), [BioTech](workflows/biotech/)
- **Business & Growth**: [Product](workflows/product/), [UX/UI](workflows/ux-ui/), [Marketing & Growth](workflows/marketing-growth/), [E-commerce](workflows/e-commerce/), [FinTech](workflows/fintech/)
- **AI & Data**: [LLM Ops](workflows/llm-ops/), [Data Science](workflows/data-science/)
- **Quality & Security**: [Cybersecurity](workflows/cybersecurity/), [Compliance](workflows/compliance/), [QA Automation](workflows/qa-automation/), [Security Audit](workflows/security-audit/)
- **Org & Support**: [Management](workflows/management/), [HR-Tech](workflows/hr-tech/), [Customer Support](workflows/customer-support/), [Productivity](workflows/productivity/), [Legal](workflows/legal/)
- **Legacy & Ecosystem**: [Legacy Migration](workflows/legacy-migration/), [API Economy](workflows/api-economy/), [Open Source](workflows/open-source/), [Technical Writing](workflows/technical-writing/), [Documentation](workflows/documentation/), [EduTech](workflows/edutech/)

## Directory Structure
- `spec/`: Technical specifications and schemas.
- `workflows/`: Collection of production-ready workflows categorized by use case.
- `tools/`: Utilities for validation and parsing.
- `docs/`: Comprehensive documentation and guides.
- `examples/`: Educational examples of MWC workflows.

## Contributing
We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit new workflows or improve the specification.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
