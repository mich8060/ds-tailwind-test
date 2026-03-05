# UDS AI-Native Architecture

This document defines the current AI contract architecture for `@mich8060/unified-design-system`.

## Goals

- Keep runtime component behavior independent from AI metadata.
- Publish deterministic, machine-readable AI contracts for generation and validation.
- Make discovery consistent across models with one canonical index.
- Enforce contract drift in CI.

## Architecture Layers

### 1) Runtime UI Layer

- Source: `src/design-system/components/**`
- Public package entrypoints: root component exports and per-component subpaths.
- No required dependency on AI metadata for normal runtime consumers.

### 2) Runtime AI API Layer

- Source: `src/design-system/ai/**`
- Core exports:
  - `@mich8060/unified-design-system/ai`
  - `@mich8060/unified-design-system/ai/manifest`
  - `@mich8060/unified-design-system/ai/validation`
  - `@mich8060/unified-design-system/ai/examples`
  - `@mich8060/unified-design-system/ai/sdk`
- Key capabilities:
  - governed manifest registries (`ComponentRegistry`, `LayoutRules`, `PatternRegistry`, governance lineage)
  - policy engine + schema/composition validation
  - deterministic failure fingerprints and repair feedback
  - runtime helper SDK (`createUDSRuntimeHelperSDK`) for validation and prop canonicalization

### 3) AI Authoring Workspace Layer

- Source: `src/ai/**`
- Published machine-readable artifacts:
  - `@mich8060/unified-design-system/ai/discovery.json`
  - `@mich8060/unified-design-system/ai/manifest.json`
  - `@mich8060/unified-design-system/ai/schema`
  - `@mich8060/unified-design-system/ai/icons`
  - `@mich8060/unified-design-system/ai/templates`
- Authoring utilities:
  - `src/ai/prompts/*` for generation/repair prompts
  - `src/ai/examples/*` for generated examples

## Discoverability Contract

`src/ai/discovery.json` is the canonical entrypoint for all models and tooling.

- Contract name: `uds.ai.discovery`
- Includes:
  - recommended read order
  - canonical package subpaths for manifest/schema/icons/templates/validation/sdk
  - active version lineage (`system`, `token`, `manifest`, `governance`, `policy`)

## Contract Artifacts

- `src/ai/manifest/manifest.json`
  - Contract name: `uds.ai.contract`
- `src/ai/icons/catalog.json`
  - Contract name: `uds.ai.icon-catalog`
  - Contains icon naming rules, appearance options, and intent-based recommendations.
- `src/ai/templates/layouts.json`
  - Contract name: `uds.ai.layout-templates`
  - Contains governed layout starter templates and constraints.

## Validation and Governance

Validation entrypoint: `validateAIOutput()`.

- Input: generated JSON tree payload
- Enforces:
  - schema shape
  - composition and policy rules
  - drift rules
  - version field consistency (`manifestVersion`, `governanceVersion`, `policyVersion`)
- Returns deterministic output with:
  - `status`
  - `violations`
  - `warnings`
  - `deterministicFeedback` (fingerprint + stable repair guidance when failing)
  - `versionLineage`

## Build and Publish Flow

`npm run build` generates and publishes AI artifacts into `dist/ai/**`:

- schema copy
- icon catalog copy
- template catalog copy
- generated component API artifacts
- generated AI manifest
- generated discovery index

`package.json` exports are the API truth for all AI entrypoints.

## Non-Goals

- No runtime component behavior changes driven by AI metadata.
- No requirement for app consumers to import AI subpaths.
