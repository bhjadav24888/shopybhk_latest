const { defineConfig } = require("cypress");

	module.exports = defineConfig({
	  e2e: {
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensure it matches your file pattern
		baseUrl: 'https://shopybhk.myshopify.com',
	  },
});
