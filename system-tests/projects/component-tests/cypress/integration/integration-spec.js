it('works', () => {
  expect(true).to.be.true
  // during integration tests,
  // the spec window and the app's window are different
  cy.window().should('not.equal', window)
  cy.$$('body').html('<h1>Hello</h1>')
  cy.get('h1').contains('Hello')
})
