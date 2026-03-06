import React from "react";
import { ScrollView } from "./ScrollView";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: ScrollView,
  props: {
    direction: "vertical",
    children: "Scrollable content",
  },
};
