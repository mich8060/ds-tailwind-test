import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Branding } from "../Branding";
import { Toolbar } from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  component: Toolbar,
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    left: <Button appearance="outline" label="Back" icon="ArrowLeft" layout="icon-left" />,
    center: "Candidates",
    right: <Button label="Add Candidate" />,
  },
};

export const WithBrandingCenter: Story = {
  args: {
    left: <Button appearance="outline" label="Menu" icon="List" layout="icon-left" />,
    center: <Branding brand="connect" symbol />,
    right: <Button appearance="soft" label="Export" icon="DownloadSimple" layout="icon-left" />,
  },
};
