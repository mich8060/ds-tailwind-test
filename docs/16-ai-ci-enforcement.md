# AI CI Enforcement

This document describes the current AI governance checks for UDS.

## Required Generated Output Contract

All generated files under `ai-generated/**` must be JSON and include:

- `manifestVersion`
- `governanceVersion`
- `policyVersion`
- `tree`
- `audit`

## Local Script Gates

- `npm run ai:validate`
  - validates generated output payload shape and policy compliance via `validateAIOutput()`
- `npm run ai:validate:examples`
  - validates governed training examples in `src/design-system/ai/examples/training.examples.ts`
- `npm run ai:gate:contracts`
  - validates AI contract integrity across:
    - required package AI exports
    - version constant alignment
    - discovery entrypoint wiring
    - icon/template catalog contracts
    - generated component API ambiguity checks
- `npm run ai:enforce`
  - enforces drift restrictions (unknown components/tokens, inline style, raw HTML usage)
- `npm run ai:token-diff`
  - blocks unapproved token-category drift
- `npm run ci:ai`
  - canonical local sequence:
    - `ai:validate`
    - `ai:validate:examples`
    - `ai:gate:contracts`
    - `ai:enforce`
    - `ai:token-diff`

## Build Prerequisite

Run `npm run build` before validating in clean environments so generated AI artifacts exist in `dist/ai/**`.

Build includes:

- `build:ai:schema`
- `build:ai:icons`
- `build:ai:templates`
- `build:ai:manifest`
- `build:ai:discovery`

## GitHub Workflow

Workflow file: `.github/workflows/ai-validation.yml`

Current behavior:

- Triggers on pull requests that modify `ai-generated/**`
- Installs dependencies and runs full package build first
- Executes:
  - `scripts/validate-ai-output.mjs`
  - `scripts/enforce-ai-usage.mjs`
  - `scripts/diff-token-usage.mjs`
- Supports `ai-override` label:
  - checks continue with `continue-on-error`
  - requires at least two approving reviews
- Uploads `ai-generated/metadata/` artifacts

Note: The workflow currently runs the script-level gates directly, while local `ci:ai` additionally includes example and contract-integrity checks.

## Deterministic Validation Result

`validateAIOutput()` returns:

- `status`
- `violations`
- `warnings`
- `deterministicFeedback` (when failing)
- `governanceVersionUsed`
- `manifestVersionUsed`
- `policyVersionUsed`
- `timestamp`
- `versionLineage` (`udsVersion`, `tokenVersion`, `manifestVersion`, `governanceVersion`, `policyVersion`)

## Strict Mode

- With `UDSGovernance.enforcement.strictMode = true`, any error yields `status: "fail"`.
- In strict mode, governed CI should block merge on failures.
