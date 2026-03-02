import { Container } from "./Container";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: Container,
  props: {
    appearance: "default",
    padding: "default",
    children: "Container content",
  },
};
