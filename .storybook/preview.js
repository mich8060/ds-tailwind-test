import "../src/styles/tokens.css";
import "../src/styles/prism-custom.css";
import "../src/index.scss";
import "../src/App.scss";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  decorators: [
    (Story) => {
      document.documentElement.setAttribute("data-brand", "design-system");
      document.documentElement.setAttribute("data-mode", "light");
      return <Story />;
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