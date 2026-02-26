import "../src/styles/index.scss";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => {
      document.documentElement.setAttribute("data-brand", "design-system");
      document.documentElement.setAttribute("data-mode", "light");
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;