import { PatternRegistry } from "../../manifest/patterns.manifest";
import type { UINodeTree } from "../../manifest/types";
import type { PolicyRule, PolicyViolation } from "../policy.types";

function flattenTypes(node: UINodeTree): string[] {
  const types: string[] = [node.type];
  for (const child of node.children ?? []) {
    types.push(...flattenTypes(child));
  }
  return types;
}

export const enforcePatternStructureRule: PolicyRule = ({ tree, patternId }) => {
  if (!patternId) return [];

  const pattern = PatternRegistry[patternId];
  if (!pattern) {
    return [
      {
        severity: "error",
        code: "RULE_UNKNOWN_PATTERN_ID",
        message: `Pattern "${patternId}" is not defined in PatternRegistry.`,
        path: "audit.patternId",
      },
    ];
  }

  const violations: PolicyViolation[] = [];
  const actualTypes = flattenTypes(tree);
  const present = new Set(actualTypes);

  for (const requiredComponent of pattern.requiredComponents) {
    if (present.has(requiredComponent)) continue;
    violations.push({
      severity: "error",
      code: "RULE_PATTERN_REQUIRED_COMPONENT_MISSING",
      message: `Pattern "${patternId}" requires component "${requiredComponent}".`,
      path: "root",
      component: requiredComponent,
    });
  }

  const expectedOrder = pattern.structure.map((entry) => entry.type);
  let cursor = 0;
  for (const expected of expectedOrder) {
    const nextIndex = actualTypes.indexOf(expected, cursor);
    if (nextIndex !== -1) {
      cursor = nextIndex + 1;
      continue;
    }
    violations.push({
      severity: "error",
      code: "RULE_PATTERN_STRUCTURE_MISMATCH",
      message: `Pattern "${patternId}" expects "${expected}" in canonical structure order.`,
      path: "root",
      component: expected,
    });
    break;
  }

  return violations;
};
