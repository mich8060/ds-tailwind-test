import { UDSGovernance } from "../manifest/governance.manifest";
import type { GovernanceConfig, UINodeTree } from "../manifest/types";
import type { PolicyViolation } from "./policy.types";
import { enforceCompositionRule } from "./rules/composition.rules";
import { enforcePrimaryActionLimitRule } from "./rules/action.rules";
import { enforceSpacingTokenRule } from "./rules/spacing.rules";
import { enforceAccessibilityRule } from "./rules/accessibility.rules";
import { enforceCanonicalPropsRule } from "./rules/props.rules";
import { enforceTokenVariableRule } from "./rules/token-variable.rules";
import { enforceTailwindDisallowRule } from "./rules/tailwind.rules";
import { enforcePatternStructureRule } from "./rules/pattern-structure.rules";
import { enforceVisualHierarchyRule } from "./rules/visual-hierarchy.rules";

const POLICY_RULES = [
  enforceCompositionRule,
  enforcePrimaryActionLimitRule,
  enforceSpacingTokenRule,
  enforceTokenVariableRule,
  enforceTailwindDisallowRule,
  enforceAccessibilityRule,
  enforceCanonicalPropsRule,
  enforcePatternStructureRule,
  enforceVisualHierarchyRule,
] as const;

export function runPolicyEngine(
  tree: UINodeTree,
  governanceConfig: GovernanceConfig = UDSGovernance,
  options?: { patternId?: string }
): PolicyViolation[] {
  return POLICY_RULES.flatMap((rule) => rule({ tree, governanceConfig, patternId: options?.patternId }));
}
