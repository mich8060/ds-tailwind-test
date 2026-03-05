import React from "react";
import { ButtonGroup } from "./ButtonGroup";

export default { title: "Components/ButtonGroup", component: ButtonGroup };

export const Default = {
  args: {
    options: [
      { id: "cancel", label: "Cancel" },
      { id: "save", label: "Save" },
    ],
  }
};

export const Vertical = {
  args: {
    orientation: "vertical",
    options: [
      { id: "draft", label: "Save Draft" },
      { id: "publish", label: "Publish" },
      { id: "delete", label: "Delete" },
    ],
  },
};
