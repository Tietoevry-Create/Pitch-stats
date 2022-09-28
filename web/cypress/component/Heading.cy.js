import { Heading } from '../../components/Heading';

const localData = {
  title: 'Example Title',
  webSiteUrl: 'https://lol.no'
};

describe('<Heading />', () => {
  it('mounts', () => {
    cy.mount(<Heading title={localData.title} webSiteUrl={localData.webSiteUrl} />);
  });
});
