import { Counter } from '../../components/Counter';

describe('<Counter />', () => {
  it('Check mount', () => {
    cy.mount(<Counter />);
  });
});
