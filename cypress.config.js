const { defineConfig } = require("cypress");

	module.exports = defineConfig({
	  e2e: {
		specPattern: 'automated_testing/cypress/e2e/**/*.cy.{js,ts}', // Ensure it matches your file pattern
		baseUrl: 'https://shopybhk.myshopify.com',
		supportFile: false, // Disable support file
	  },
});
