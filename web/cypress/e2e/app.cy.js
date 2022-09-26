describe('Page Navigation from "Landingpage". ', () => {
  // HEADER

  it('Navigate to "Funksjoner". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Funksjoner').click();
  });

  /*  CROSS-ORIGIN -> GOOGLE.COM
  it('Navigate to "Sider". ', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Sider').click()
  })
  */

  it('Navigate to "Om". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Om').click();
  });

  it('Navigate to "TietoEvry". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('TietoEvry').click();
  });

  it('Navigate to "Sammenligning". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Sammenligning').click();
  });

  // MAIN CONTENT

  it('Navigate to "Category/Nyheter". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Nyheter').click();
  });

  it('Navigate to "Category/Offentlig". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Offentlig').click();
  });

  it('Navigate to "Category/Teknologi". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Teknologi').click();
  });

  it('Navigate to "Category/Strømselskap". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Strømselskap').click();
  });

  // FOOTER

  /*  CROSS-ORIGIN -> GOOGLE.COM
  it('Navigate to "Om dette prosjektet". ', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Om dette prosjektet').click()
  })
  */

  it('Navigate to "Tietoevry". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Tietoevry').click();
  });

  it('Navigate to "Kildekode". ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('KIldekode').click();
  });
});
