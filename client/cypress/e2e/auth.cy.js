describe('Auth Flow', () => {
  it('registers and logs in', () => {
    cy.visit('/');
    // adapt to your UI selectors
    cy.get('[data-testid=register-link]').click();
    cy.get('[data-testid=name]').type('David');
    cy.get('[data-testid=email]').type('d@ex.com');
    cy.get('[data-testid=submit]').click();

    // assert redirected or success message
    cy.contains('Welcome');

    // test login
    cy.get('[data-testid=logout]').click();
    cy.get('[data-testid=login-link]').click();
    cy.get('[data-testid=email]').type('d@ex.com');
    cy.get('[data-testid=submit]').click();
    cy.contains('Welcome');
  });
});
