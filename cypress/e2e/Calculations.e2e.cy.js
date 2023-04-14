describe('Calculations test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should return correct value on sum', () => {
    cy.contains('6').click();
    cy.contains('+').click();
    cy.contains('5').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '11');
  });

  it('should return correct value on subtract', () => {
    cy.contains('8').click();
    cy.contains('-').click();
    cy.contains('4').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '4');
  });

  it('should return correct value on multiply', () => {
    cy.contains('7').click();
    cy.contains('×').click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '21');
  });

  it('should return correct value on divide', () => {
    cy.contains('9').click();
    cy.contains('÷').click();
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '4.500');
  });

  it('should return correct value on mod', () => {
    cy.contains('7').click();
    cy.contains('%').click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '1');
  });

  it('should return correct value with changing sign', () => {
    cy.contains('±').click();
    cy.contains('4').click();
    cy.contains('+').click();
    cy.contains('5').click();
    cy.contains(')').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '1');
  });

  it('should return correct value with fractional numbers', () => {
    cy.get('button').contains('.').click();
    cy.contains('1').click();
    cy.contains('+').click();
    cy.get('button').contains('.').click();
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '0.300');
  });

  it('should return correct value with parentheses', () => {
    cy.contains('(').click();
    cy.get('button').contains('2').click();
    cy.contains('+').click();
    cy.get('button').contains('2').click();
    cy.contains(')').click();
    cy.contains('×').click();
    cy.get('button').contains('2').click();
    cy.contains('=').click();
    cy.get('[data-test-id="current-output"]').should('have.text', '8');
    cy.get('ul > li').should('have.text', '1. ( 2 + 2 ) × 2');
  });
});
