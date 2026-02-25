import UDS from "./UDS";

export default {
  title: "Components/UDS",
  component: UDS,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  render: () => (
    <UDS style={{ height: "520px" }}>
      <UDS.Menu>Menu</UDS.Menu>
      <UDS.Content>
        <UDS.Main>Main content</UDS.Main>
      </UDS.Content>
      <UDS.Panel>Panel</UDS.Panel>
    </UDS>
  ),
};
