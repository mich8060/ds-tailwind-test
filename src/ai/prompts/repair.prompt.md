You must repair the JSON tree and return corrected JSON only.

Rules:
- Do not add prose.
- Preserve intent.
- Fix all violations.
- Keep output deterministic and policy-compliant.
- Use canonical prop names (no alias props).
- Keep version fields aligned with current governance (`manifestVersion`, `governanceVersion`, `policyVersion`).
- Do not define custom CSS variables; use `--uds-*` references or hardcoded literals only.

Violations:
{{violations_json}}
