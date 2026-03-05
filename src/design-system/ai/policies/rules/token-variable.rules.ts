import type { PolicyRule, PolicyViolation } from "../policy.types";

const CSS_VAR_REGEX = /--[a-zA-Z0-9_-]+/g;

const pushViolation = (
  violations: PolicyViolation[],
  code: string,
  message: string,
  path: string,
  component: string,
  token?: string
) => {
  violations.push({
    severity: "error",
    code,
    message,
    path,
    component,
    token,
  });
};

const scanValue = (
  value: unknown,
  path: string,
  component: string,
  violations: PolicyViolation[]
) => {
  if (typeof value === "string") {
    const matches = value.match(CSS_VAR_REGEX) ?? [];
    const unique = new Set(matches);
    unique.forEach((token) => {
      if (token.startsWith("--uds-")) return;
      pushViolation(
        violations,
        "RULE_CUSTOM_CSS_VAR_DISALLOWED",
        `Custom CSS variable "${token}" is not allowed. Use --uds-* variables or hardcoded literals.`,
        path,
        component,
        token
      );
    });
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => scanValue(entry, `${path}[${index}]`, component, violations));
    return;
  }

  if (typeof value !== "object" || value === null) return;

  Object.entries(value as Record<string, unknown>).forEach(([key, nestedValue]) => {
    if (key.startsWith("--")) {
      pushViolation(
        violations,
        "RULE_CSS_VAR_DEFINITION_DISALLOWED",
        `Defining CSS variable "${key}" is not allowed in generated output.`,
        `${path}.${key}`,
        component,
        key
      );
    }
    scanValue(nestedValue, `${path}.${key}`, component, violations);
  });
};

export const enforceTokenVariableRule: PolicyRule = ({ tree }) => {
  const violations: PolicyViolation[] = [];

  const walk = (node: typeof tree, path: string) => {
    const props = node.props ?? {};
    Object.entries(props).forEach(([prop, value]) => {
      scanValue(value, `${path}.props.${prop}`, node.type, violations);
    });
    (node.children ?? []).forEach((child, index) => walk(child, `${path}.children[${index}]`));
  };

  walk(tree, "root");
  return violations;
};
