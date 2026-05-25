import type { Preview } from '@storybook/react-vite';
import '../src/theme.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema global das prévias do Aurora DS',
      toolbar: {
        title: 'Tema',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Escuro' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (context.globals.theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }

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
