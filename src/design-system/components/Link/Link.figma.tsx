import React from "react";
import { Link } from "./Link";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: Link,
  props: {
    href: "#",
    children: "View details",
    appearance: "primary",
    underline: "always",
  },
};
