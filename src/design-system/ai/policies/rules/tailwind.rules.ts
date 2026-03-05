import type { PolicyRule, PolicyViolation } from "../policy.types";

const CLASSLIKE_KEYS = new Set(["class", "className", "classes", "tw", "tailwind"]);

const TAILWIND_TOKEN_PATTERNS: RegExp[] = [
  /^(?:sm|md|lg|xl|2xl):/,
  /^(?:hover|focus|active|disabled|dark|group-hover):/,
  /^(?:m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl)-/,
  /^(?:w|h|min-w|min-h|max-w|max-h)-/,
  /^(?:bg|text|font|tracking|leading|rounded|shadow|border|ring)-/,
  /^(?:flex|grid|inline-flex|inline-grid|contents|block|inline-block|hidden)$/,
  /^(?:items|justify|content|self|place-items|place-content|place-self)-/,
  /^(?:gap|space-x|space-y|col-span|row-span|order)-/,
  /^tw-/,
];

const isTailwindToken = (token: string): boolean => {
  const normalized = token.trim();
  if (!normalized) return false;
  return TAILWIND_TOKEN_PATTERNS.some((pattern) => pattern.test(normalized));
};

const toTokens = (value: string): string[] => value.split(/\s+/g).map((entry) => entry.trim()).filter(Boolean);

const scanValue = (
  value: unknown,
  path: string,
  component: string,
  violations: PolicyViolation[]
) => {
  if (typeof value === "string") {
    const tokens = toTokens(value);
    for (const token of tokens) {
      if (!isTailwindToken(token)) continue;
      violations.push({
        severity: "error",
        code: "RULE_TAILWIND_CLASS_DISALLOWED",
        message: `Tailwind utility token "${token}" is disallowed. Use UDS components and tokenized props.`,
        path,
        component,
        token,
      });
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => scanValue(entry, `${path}[${index}]`, component, violations));
    return;
  }

  if (typeof value !== "object" || value === null) return;

  Object.entries(value as Record<string, unknown>).forEach(([key, nestedValue]) => {
    if (CLASSLIKE_KEYS.has(key)) {
      scanValue(nestedValue, `${path}.${key}`, component, violations);
      return;
    }
    scanValue(nestedValue, `${path}.${key}`, component, violations);
  });
};

export const enforceTailwindDisallowRule: PolicyRule = ({ tree }) => {
  const violations: PolicyViolation[] = [];

  const walk = (node: typeof tree, path: string) => {
    const props = node.props ?? {};
    Object.entries(props).forEach(([prop, value]) => {
      if (CLASSLIKE_KEYS.has(prop)) {
        scanValue(value, `${path}.props.${prop}`, node.type, violations);
        return;
      }
      if (typeof value === "string" && /\b(?:className|tailwind|tw)\b/i.test(prop)) {
        scanValue(value, `${path}.props.${prop}`, node.type, violations);
      }
    });
    (node.children ?? []).forEach((child, index) => walk(child, `${path}.children[${index}]`));
  };

  walk(tree, "root");
  return violations;
};
