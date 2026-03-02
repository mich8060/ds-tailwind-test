import { EmptyState } from "./EmptyState";

export const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";

export default {
  figmaNodeUrl,
  component: EmptyState,
  props: {
    title: "Empty state title",
    description: "Helpful guidance for the user when no content is available.",
    icon: "Inbox",
    align: "center",
  },
};
