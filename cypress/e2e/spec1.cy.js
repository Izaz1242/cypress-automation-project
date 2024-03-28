describe('suite1', () => {
  it('test1 webpage', () => {
    cy.visit('https://www.flipkart.com/')
  })

  it('test2 login', () => {
    cy.visit('https://www.flipkart.com/')
    cy.title().should('eq','Search for Products, Brands and More')
  })
})