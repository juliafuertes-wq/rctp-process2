import '../src/styles/globals.css';

const materialIconsLink = document.createElement('link');
materialIconsLink.rel = 'stylesheet';
materialIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
document.head.appendChild(materialIconsLink);

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;