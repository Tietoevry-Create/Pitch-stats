import { Navbar } from '.';

describe('<Navbar />', () => {
  it('Check mount', () => {
    cy.mount(<Navbar />);
  });
});
