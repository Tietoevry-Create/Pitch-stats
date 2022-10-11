import { Footer } from '.';

const localData = {
  footerLinks: [
    {
      _key: '35d8d7f003b3',
      _type: 'link',
      href: 'https://www.google.com/',
      label: 'Om dette prosjektet',
      linkReference: null
    },
    {
      _key: '393b064f6c8a',
      _type: 'link',
      href: 'https://www.tietoevry.com/',
      label: 'Tietoevry',
      linkReference: null
    },
    {
      _key: 'f3aa50295c3a',
      _type: 'link',
      href: null,
      label: 'KIldekode',
      linkReference: '{_createdAt: "2022-08-31T10:38:12Z", _id: "0f6d1ab6…}'
    }
  ]
};

describe('<Footer />', () => {
  it('Check mount', () => {
    cy.mount(<Footer footerData={localData} />);
  });
});
