/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('Testing URL', () => {

    it('Setting Assertions', () => {
    cy.visit('/')
    cy.url().should('include', 'com')
    cy.url().should('include', 'amazon')
    cy.url().should('eq', 'https://www.amazon.com/')
    cy.url().should('contains', 'amazon')
    cy.location('protocol').should('contains', 'https')  
    cy.location('hostname').should('eq', 'www.amazon.com')

    })
  })