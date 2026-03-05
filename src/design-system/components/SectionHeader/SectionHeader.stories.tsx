import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "../Button";
import { Tag } from "../Tag";

export default { title: "Components/SectionHeader", component: SectionHeader };

export const Default = {
  args: {
    eyebrow: "Overview",
    title: "Open Requisitions",
    description: "Track open roles and quickly create or export requisition details.",
  }
};

export const WithActions = {
  args: {
    eyebrow: "Section Header",
    title: "Candidates",
    description: "Review active candidates and current handoff steps.",
    actions: (
      <>
        <Button label="Export" appearance="outline" />
        <Button label="New Candidate" />
      </>
    ),
  },
};

export const WithMeta = {
  args: {
    title: "Cardiology - Denver",
    description: "Current status and assignment metadata for this workflow.",
    meta: (
      <>
        <Tag label="8 Active" color="green" />
        <Tag label="2 Needs Review" color="orange" />
      </>
    ),
  },
};
