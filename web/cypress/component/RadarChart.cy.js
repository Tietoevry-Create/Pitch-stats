import { CustomRadarChart } from '../../components/RadarChart';

describe('<CustomRadarChart />', () => {
  it('Check mount', () => {
    cy.mount(<CustomRadarChart />);
  });
});
