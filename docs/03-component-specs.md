# Spec-driven Components

A mature component has:

- A **spec** (contract) that defines variants, states, and constraints
- A **types** file describing the public API
- A **tokens mapping** file for semantic token usage
- SCSS that uses only semantic tokens (no raw values)
- Stories and tests

Specs are version-controlled, colocated, and can be used to:
- generate Storybook controls
- generate test matrices
- validate governance (“no unsupported variants”)
- ground AI generation
