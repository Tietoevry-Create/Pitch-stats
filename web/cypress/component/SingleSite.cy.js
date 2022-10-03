import { SingleSite } from '../../components/SingleSite';

const localData = {
  index: 5,
  site: {
    _id: '4384078f-206d-4e01-af26-1b3140e382cc',
    _type: 'site',
    category: {
      title: 'Offentlig'
    },
    slug: {
      _type: 'slug',
      current: 'bergen-kommune'
    },
    title: 'Bergen kommune'
  }
};

describe('<SingleSite />', () => {
  it('Check mount', () => {
    cy.mount(<SingleSite site={localData.site} index={localData.index} />);
  });
});
