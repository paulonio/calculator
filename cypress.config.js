const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://paulonio.netlify.app/',
    supportFile: false,
    viewportWidth: 1340,
  },
});
