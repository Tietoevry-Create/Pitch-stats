import { Sidebar } from '.';

describe('<Sidebar />', () => {
  it('Check mount', () => {
    cy.mount(<Sidebar />);
  });
});
