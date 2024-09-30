module.exports = {
  ci: {
    collect: {
      staticDistDir: './',  // Specify your static files directory
      url: ['https://shopybhk.myshopify.com'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
