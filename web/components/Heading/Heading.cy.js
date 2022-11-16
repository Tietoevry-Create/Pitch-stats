import { Heading } from '.';

describe('<Heading />', () => {
  it('Check mount', () => {
    cy.mount(<Heading />);
  });
});
