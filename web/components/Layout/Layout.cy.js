import { Layout } from '.';

const localData = {
  footerData: {
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
        linkReference: {
          _createdAt: '2022-08-31T10:38:12Z',
          _id: '0f6d1ab6-4eab-4596-a73e-a74a6ae127ba',
          _rev: 'fT2DAxGuAIAZVP80ZJWaWf',
          _type: 'category',
          _updatedAt: '2022-09-06T10:24:10Z',
          lede: 'Det finnes en rekke norske nettsider som spesialiserer seg på å informere befolkningen om ny og spennende teknologi som jobbes med. Her er en liste av de mest populære i Norge.',
          path: 'M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h4.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h4.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h4.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.79...',
          slug: {
            _type: 'slug',
            current: 'teknologi'
          },
          title: 'Teknologi'
        }
      }
    ]
  },
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

describe('<Layout />', () => {
  it('Check mount', () => {
    cy.mount(<Layout footerData={localData.footerData} menuData={localData.menuData} />);
  });
});
