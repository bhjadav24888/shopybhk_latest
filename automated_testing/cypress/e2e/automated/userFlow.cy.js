describe('Shopify Full User Flow', () => {
  it('Shopify Full User Flow', () => {
    
	// Visit the homepage
    cy.visit('https://shopybhk.myshopify.com/');
	
	//enter store password
	//cy.get('.password-link').click();
	cy.get('[type="password"]').type('bratwu');
	cy.get('[type="submit"]').click();
	//cy.get('#accept-cookies').click();
	
	//home page
	//cy.get('.caption-secondary').first().click();
	//plp page
	//cy.get('.product.item').first().click();
	
	//select product varient
	//cy.get('.header-logo').trigger('mouseover');
	
	//pdp page add to cart
	//cy.get('.button-addtobag-cta-title').first().click({ force: true });
	
	//bag icone mousehover
	//cy.get('.header-item-bag').trigger('mouseover');
	
	//checkout click
	//cy.get('.button.button-orange').click({ force: true });
	
	// Confirm order was placed
    //cy.contains('automated testing done');
	
  });
});
