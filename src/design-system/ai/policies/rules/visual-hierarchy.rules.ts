import type { UINodeTree } from "../../manifest/types";
import type { PolicyRule, PolicyViolation } from "../policy.types";

const VISUAL_ANCHOR_COMPONENTS = new Set([
  "Toolbar",
  "SectionHeader",
  "Statistics",
  "Status",
  "Tag",
  "Badge",
  "Avatar",
  "Checklist",
  "EmptyState",
  "Table",
  "ProvidersCard",
  "Calendar",
  "EventCard",
  "ProgressIndicator",
  "ProgressCircle",
  "Branding",
  "Medallion",
  "ImageAspect",
]);

const LOW_SIGNAL_COMPONENTS = new Set([
  "Text",
  "Layout",
  "Container",
  "Field",
  "TextInput",
  "Textarea",
  "Dropdown",
  "Button",
]);

const SIMPLE_PATTERN_IDS = new Set(["AuthForm", "ModalConfirmation"]);

interface VisualStats {
  totalNodes: number;
  visualAnchors: number;
  lowSignalNodes: number;
  surfacedContainers: number;
  headingRegions: number;
  iconBearingNodes: number;
}

function isHeadingText(node: UINodeTree): boolean {
  if (node.type !== "Text") return false;
  const variant = String(node.props?.variant ?? "");
  return variant.startsWith("heading-") || variant.startsWith("display-");
}

function hasIcon(node: UINodeTree): boolean {
  const props = node.props ?? {};
  return typeof props.icon === "string" || typeof props.iconTrailing === "string" || node.type === "Menu";
}

function collect(node: UINodeTree, stats: VisualStats): void {
  stats.totalNodes += 1;
  if (VISUAL_ANCHOR_COMPONENTS.has(node.type)) stats.visualAnchors += 1;
  if (LOW_SIGNAL_COMPONENTS.has(node.type)) stats.lowSignalNodes += 1;
  if (node.type === "Container") {
    const appearance = String(node.props?.appearance ?? "transparent");
    if (appearance === "default" || appearance === "secondary") stats.surfacedContainers += 1;
  }
  if (node.type === "Toolbar" || node.type === "SectionHeader" || isHeadingText(node)) {
    stats.headingRegions += 1;
  }
  if (hasIcon(node)) stats.iconBearingNodes += 1;
  for (const child of node.children ?? []) collect(child, stats);
}

export const enforceVisualHierarchyRule: PolicyRule = ({ tree, patternId }) => {
  if (patternId && SIMPLE_PATTERN_IDS.has(patternId)) return [];

  const stats: VisualStats = {
    totalNodes: 0,
    visualAnchors: 0,
    lowSignalNodes: 0,
    surfacedContainers: 0,
    headingRegions: 0,
    iconBearingNodes: 0,
  };

  collect(tree, stats);

  const violations: PolicyViolation[] = [];

  if (stats.totalNodes >= 8 && stats.visualAnchors < 2) {
    violations.push({
      severity: "error",
      code: "RULE_LOW_VISUAL_HIERARCHY",
      message:
        "Dense pages must include at least two visual anchor components such as Toolbar, Statistics, SectionHeader, Status, Tag, Avatar, Table, Checklist, or EmptyState.",
      path: "root",
      component: tree.type,
    });
  }

  if (stats.totalNodes >= 10 && stats.lowSignalNodes >= stats.totalNodes - 2) {
    violations.push({
      severity: "error",
      code: "RULE_TEXT_HEAVY_LAYOUT",
      message:
        "Layout is dominated by low-signal structure/text components. Introduce surfaced sections, data-display components, status elements, icons, or richer visual anchors.",
      path: "root",
      component: tree.type,
    });
  }

  if (stats.totalNodes >= 8 && stats.headingRegions === 0) {
    violations.push({
      severity: "error",
      code: "RULE_MISSING_HEADING_REGION",
      message:
        "Non-trivial pages must establish hierarchy with a heading region such as Toolbar, SectionHeader, or heading/display Text.",
      path: "root",
      component: tree.type,
    });
  }

  if (stats.totalNodes >= 8 && stats.surfacedContainers === 0) {
    violations.push({
      severity: "warning",
      code: "RULE_NO_SURFACE_CONTRAST",
      message:
        "Page does not use any surfaced Container regions. Add at least one default or secondary surface to create depth and separation.",
      path: "root",
      component: tree.type,
    });
  }

  if (stats.totalNodes >= 8 && stats.iconBearingNodes === 0) {
    violations.push({
      severity: "warning",
      code: "RULE_ICONLESS_DENSE_LAYOUT",
      message:
        "Dense pages should include icons in navigation, metrics, actions, or empty states unless the prompt explicitly forbids them.",
      path: "root",
      component: tree.type,
    });
  }

  return violations;
};
