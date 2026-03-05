import React from "react";
import { RadioGroup } from "./RadioGroup";

export default { title: "Components/RadioGroup", component: RadioGroup };

export const Default = {
  args: {
    label: "Contact Method",
    defaultValue: "email",
    options: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "text", label: "Text message" },
    ],
  }
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
    defaultValue: "daily",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
  },
};
