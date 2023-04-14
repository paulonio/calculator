describe('Test settingsCC page', () => {
  beforeEach(() => {
    cy.visit('/settingsCC');
  });

  it('should render select and checkbox', () => {
    cy.get('select').invoke('val').should('equal', 'dark');
    cy.get('input[type="checkbox"]').click();
    cy.get('select').select(0).invoke('val').should('equal', 'light');
  });

  it('should hide history on checkbox change', () => {
    cy.get('input[type="checkbox"]').click();
    cy.visit('/');
    cy.contains('History').should('not.exist');
  });
});
