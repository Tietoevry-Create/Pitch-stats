import { Counter } from '.';

describe('<Counter />', () => {
  it('Check mount', () => {
    cy.mount(<Counter />);
  });
});
