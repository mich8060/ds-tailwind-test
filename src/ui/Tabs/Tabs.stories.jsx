import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
      { id: "settings", label: "Settings" },
    ],
    activeTab: 0,
  },
};
