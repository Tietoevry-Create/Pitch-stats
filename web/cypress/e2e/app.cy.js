describe('Page Navigation from "Landingpage". ', () => {
  const baseURL = 'http://localhost:3000';
  const headerLinkNames = ['Funksjoner', 'Om', 'Tietoevry', 'Sammenligning']; // , 'Sider' === cross-origin.
  const mainLinkNames = ['Nyheter', 'Offentlig', 'Teknologi', 'Strømselskap'];
  const footerLinkNames = ['Tietoevry', 'Tietoevry', 'KIldekode']; // , 'Om dette prosjektet' === cross-origin.

  const allLinks = [headerLinkNames, mainLinkNames, footerLinkNames];

  it('Navigate to Mainpage', () => {
    console.log('test disabled');
  });

  /* DISABLED UNTIL FURTHER DEVELOPED.
  allLinks.forEach((group) => {
    group.forEach((subPage) => {
      it(`Navigate to ${subPage}`, () => {
        cy.visit(baseURL);
        cy.contains(subPage).click();
      });
    });
  });
  */
});
