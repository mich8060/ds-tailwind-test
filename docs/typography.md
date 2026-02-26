# Typography approach

## Goals
- Keep your existing `--uds-*` variable naming
- Provide a governed API (`Text` component) with semantic tags via `as`
- Support line-height density: tight / regular / loose
- Support responsive typography via token overrides at breakpoints
- Provide legacy class aliases to migrate from `.uds-display-96-bold` usage

## How responsiveness works
We override primitive tokens (`--uds-font-size-*`, `--uds-line-*`) at breakpoints.
Semantic tokens (`--uds-type-...`) keep mapping stable.

This means:
- Components never change
- Brands can override typography by overriding primitives (or semantics if needed)
