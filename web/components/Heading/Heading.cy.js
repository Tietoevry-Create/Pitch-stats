import { Heading } from '.';

const localData = {
  title: 'Dagbladet',
  webSiteUrl: 'https://www.dagbladet.no'
};

describe('<Heading />', () => {
  it('Check mount', () => {
    cy.mount(<Heading title={localData.title} webSiteUrl={localData.webSiteUrl} />);
  });
});
