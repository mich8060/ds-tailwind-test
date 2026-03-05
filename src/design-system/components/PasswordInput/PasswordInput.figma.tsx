import React from "react";
import { PasswordInput } from "./PasswordInput";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: PasswordInput,
  props: {
    children: ["PasswordInput"]
  }
};
