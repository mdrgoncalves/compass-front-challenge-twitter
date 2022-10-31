export const parameters = {
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['Docs', ['Introduction', 'Colors'], 'Atoms', 'Molecules', 'Organisms', 'Pages'],
        locales: 'en-US',
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}