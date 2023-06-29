
describe('Search in Google', () => {
  it('should make aa search', () => {
    cy.visit("https://google.com")
    cy.get('textarea[name="q"]')
      .click()
      .type("receita de batata angola{enter}")

    cy.scrollTo(0, 500)

    cy.contains('h3', "Receita de Sopa de batata, enviada por tudogostoso")
    .click()
  
  })
})



// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
