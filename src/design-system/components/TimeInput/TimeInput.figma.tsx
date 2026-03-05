import React from "react";
import { TimeInput } from "./TimeInput";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: TimeInput,
  props: {
    children: ["TimeInput"]
  }
};
