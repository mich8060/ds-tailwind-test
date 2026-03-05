import React from "react";
import { Statistics } from "./Statistics";

export default { title: "Components/Statistics", component: Statistics };

export const Default = {
  args: {
    label: "Total Revenue",
    statusLabel: "CDN Cache",
    value: "$45,290",
    helperText: "12% increase from previous period",
    icon: "CornersOut",
    actionIcon: "CornersOut",
    accent: "danger",
    progressValue: 30,
    progressLabel: "Improving",
    progressDelta: "+8%",
  }
};

export const Minimal = {
  args: {
    label: "Open Reqs",
    value: "42",
    helperText: "Current month",
    showAccentRail: false,
  },
};
