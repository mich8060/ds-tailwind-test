import React from "react";
import { Layout } from "./Layout";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: Layout,
  props: {
    children: ["Layout"]
  }
};
