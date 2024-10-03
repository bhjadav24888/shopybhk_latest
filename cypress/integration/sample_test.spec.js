describe('Sample Test', () => {
  it('Visits the Shopify store homepage', () => {
    cy.visit('https://shopybhk.myshopify.com/');
    cy.contains('Shopify').should('be.visible');
  });
});
