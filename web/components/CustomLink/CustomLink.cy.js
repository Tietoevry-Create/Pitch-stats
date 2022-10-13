import { CustomLink } from '.';

const localData = {
  to: {
    _id: '0a138ebe-626a-4978-9783-ff6745ce1852',
    _type: 'site',
    category: {
      title: 'Strømselskap'
    },
    slug: {
      _type: 'slug',
      current: 'talkmore'
    },
    title: 'Talkmore'
  },
  children: '<a />'
};

describe('<CustomLink />', () => {
  it('Check mount', () => {
    cy.mount(<CustomLink to={localData} children={<a />} />);
  });
});
