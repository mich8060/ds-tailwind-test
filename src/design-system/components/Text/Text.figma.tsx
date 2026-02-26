/**
 * Figma Code Connect mapping (example stub)
 * Replace figmaNodeUrl with your published library component node URL.
 */
import React from "react";
import { Text } from "./Text";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: Text,
  props: {
    as: ["h1", "h2", "p", "span"],
    variant: ["display-96", "heading-32", "body-16"],
    weight: ["regular", "medium", "semibold", "bold"],
    leading: ["tight", "regular", "loose"],
    children: ["Sample text"]
  }
};
