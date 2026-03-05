import React from "react";
import { CheckboxGroup } from "./CheckboxGroup";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: CheckboxGroup,
  props: {
    children: ["CheckboxGroup"]
  }
};
