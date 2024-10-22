const { defineConfig } = require("cypress");

	module.exports = defineConfig({
	  e2e: {
		specPattern: 'cypress/e2e/**/*.spec.{js,ts}',', // Ensure it matches your file pattern
		baseUrl: 'https://shopybhk.myshopify.com',
	  },
});
