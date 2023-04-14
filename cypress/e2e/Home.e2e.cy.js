describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render home page', () => {
    cy.get('button').should('have.length', 24);
  });

  it('should type and delete current operand', () => {
    cy.get('[data-test-id="current-output"]').should('be.empty');
    cy.contains('7').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '7');
    cy.contains(/^C$/).click();
    cy.get('[data-test-id="current-output"]').should('be.empty');
  });

  it('should change previous operations', () => {
    cy.get('[data-test-id="previous-output"]').should('be.empty');
    cy.contains('7').click();
    cy.contains('×').click();
    cy.get('[data-test-id="previous-output"]').should('have.text', '7 ×');
  });

  it('should show and clear history', () => {
    cy.contains('7').click();
    cy.contains('×').click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('ul > li').should('have.text', '1. 7 × 3');
    cy.contains('CH').click();
    cy.get('ul > li').should('not.exist');
  });

  it('should change sign', () => {
    cy.contains('5').click();
    cy.contains('÷').click();
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '2.500');
    cy.contains('±').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '-2.5');
  });

  it('should clear previous and current output', () => {
    cy.contains('2').click();
    cy.contains('-').click();
    cy.contains('3').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '3');
    cy.get('[data-test-id="previous-output"]').should('have.text', '2 -');
    cy.contains('AC').click();
    cy.get('[data-test-id="current-output"]').should('be.empty');
    cy.get('[data-test-id="previous-output"]').should('be.empty');
  });

  it('should clear all', () => {
    cy.contains('2').click();
    cy.contains('-').click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('ul > li').should('have.text', '1. 2 - 3');
    cy.get('[data-test-id="current-output"]').should('have.text', '-1');
    cy.contains('+').click();
    cy.get('[data-test-id="previous-output"]').should('have.text', '-1 +');
    cy.contains('CA').click();
    cy.get('[data-test-id="current-output"]').should('be.empty');
    cy.get('[data-test-id="previous-output"]').should('be.empty');
    cy.get('ul > li').should('not.exist');
  });
});
