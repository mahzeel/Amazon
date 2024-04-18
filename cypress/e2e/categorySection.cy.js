/// <reference types="cypress" />

Cypress.config('pageLoadTimeout', 10000)

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('template spec', () => {

})

  it('Should be able to select and order from the category lists', () => {
    cy.visit('/')
    cy.wait(2000)
    //Hamburger Icon
    cy.get('[id="nav-hamburger-menu"]').click({force: true})
    //Computer button
    cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item', {timeout: 8000}).click()
    cy.scrollTo('bottom')
    //Tablet Assesories
    cy.get('[id="hmenu-content"]',{requestTimeout: 6000})
      .find('.hmenu-item').contains('Tablet Accessories')
      .click({force: true})
    cy.get('[id="brandsRefinements"]').click()
    cy.contains('See more').click()
    cy.get('.a-size-base a-color-bas').check()



  })
