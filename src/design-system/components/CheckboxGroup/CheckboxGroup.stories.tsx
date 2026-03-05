import React from "react";
import { CheckboxGroup } from "./CheckboxGroup";

export default { title: "Components/CheckboxGroup", component: CheckboxGroup };

export const Default = {
  args: {
    label: "Specialties",
    defaultValues: ["anesthesiology"],
    options: [
      { value: "anesthesiology", label: "Anesthesiology" },
      { value: "cardiology", label: "Cardiology" },
      { value: "neurology", label: "Neurology" },
    ],
  }
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
    options: [
      { value: "remote", label: "Remote" },
      { value: "hybrid", label: "Hybrid" },
      { value: "onsite", label: "On-site" },
    ],
  },
};
