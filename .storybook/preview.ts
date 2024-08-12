import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // viewport: {
    //   viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS },
    // },
  },
};

export default preview;
