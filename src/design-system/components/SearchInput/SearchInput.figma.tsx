import React from "react";
import { SearchInput } from "./SearchInput";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: SearchInput,
  props: {
    children: ["SearchInput"]
  }
};
