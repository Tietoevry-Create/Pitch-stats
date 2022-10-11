import { Navbar } from '.';

const localData = {
  menuData: {
    menuLinks: [
      {
        _key: 'd74455a53c96',
        _type: 'link',
        href: null,
        label: 'Funksjoner',
        linkReference: {
          _createdAt: '2022-06-30T12:17:39Z',
          _id: '0e4cba99-91fd-4238-b7a6-eb5616d48717',
          _rev: 'wLTa6yNrbnanFt9Yb6gIoK',
          _type: 'site',
          _updatedAt: '2022-08-09T08:41:05Z',
          blockContent: [
            {
              _key: 'd9ded05b357f',
              _type: 'block',
              children: [
                {
                  _key: 'a803c22b157d0',
                  _type: 'span',
                  marks: [],
                  text: 'Dagbladet er en norsk dagsavis som utgis på bokmål, grunnlagt i 1869. Avisens journalistiske kjerneområder er nyheter, sport, kultur og underholdning. Avisen har sterke tradisjoner innen feature og gravejournalistikk, og har høstet mange priser for sine avsløringer. '
                }
              ],
              markDefs: [],
              style: 'normal'
            }
          ],
          categoryReference: {
            _ref: '9908a364-4a79-46d2-976c-a175404f4943',
            _type: 'reference'
          },
          slug: {
            _type: 'slug',
            current: 'dagbladet'
          },
          title: 'Dagbladet',
          webSiteUrl: 'https://www.dagbladet.no/'
        }
      },
      {
        _key: 'b2fde781a69bd74badbd4a9c96e8beaf',
        _type: 'link',
        href: 'https://www.google.com/',
        label: 'Sider',
        linkReference: null
      },
      {
        _key: '2aa3cb41a2e520266c8d5d4838ed8edd',
        _type: 'link',
        href: null,
        label: 'Om',
        linkReference: {
          _createdAt: '2022-09-02T09:52:20Z',
          _id: '5931a0dd-3d6e-424f-b3ea-e5445797a23d',
          _rev: 'eaeJdmcReMxVwAL18CCOJI',
          _type: 'sitePage',
          _updatedAt: '2022-09-02T11:46:08Z',
          blockContent: [
            {
              _key: 'd879aa9febca',
              _type: 'block',
              children: [
                {
                  _key: 'a7f5fedc9ff2',
                  _type: 'span',
                  marks: [],
                  text: 'Noe tekst'
                }
              ],
              markDefs: [],
              style: 'normal'
            }
          ],
          slug: {
            _type: 'slug',
            current: 'om'
          },
          title: 'Om'
        }
      },
      {
        _key: 'b4409d463b42',
        _type: 'link',
        href: null,
        label: 'TietoEvry',
        linkReference: null
      },
      {
        _key: 'b976946e756d',
        _type: 'link',
        href: null,
        label: 'Sammenligning',
        linkReference: {
          _createdAt: '2022-09-20T07:32:10Z',
          _id: 'bc2320de-4a80-4c3d-abc6-cc606e22f72e',
          _rev: '67xIgaiHWz4ho6UZJqI7j0',
          _type: 'sitePage',
          _updatedAt: '2022-09-20T07:32:10Z',
          slug: {
            _type: 'slug',
            current: 'sammenligning'
          },
          title: 'Sammenligning'
        }
      }
    ]
  }
};

describe('<Navbar />', () => {
  it('Check mount', () => {
    cy.mount(<Navbar menuData={localData.menuData} />);
  });
});
