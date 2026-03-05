import React from "react";
import { CurrencyInput } from "./CurrencyInput";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: CurrencyInput,
  props: {
    children: ["CurrencyInput"]
  }
};
