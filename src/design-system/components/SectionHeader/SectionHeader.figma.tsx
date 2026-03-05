import React from "react";
import { SectionHeader } from "./SectionHeader";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: SectionHeader,
  props: {
    children: ["SectionHeader"]
  }
};
