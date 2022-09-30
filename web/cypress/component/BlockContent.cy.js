import { BlockContent } from '../../components/BlockContent';

const localData = {
  blockContent: [
    {
      _key: '17ad62a722fc',
      _type: 'block',
      children: [
        {
          _key: 'b92e1e962406',
          _type: 'span',
          marks: [],
          text: 'Det finnes mange datapunkter for å vurdere en nettside. \nDette verktøyet analyserer utslipp av karbonmonoksid, brukervennlighet, hvor søkemotorvennlig siden er, samt performance. \nSidene blir vist etter næring. (Litt mer tekst her for å se hvor stort det eventuelt blir i div boksen dersom vi skal ha mer tekst senere bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla)'
        }
      ],
      markDefs: [],
      style: 'normal'
    }
  ]
};

describe('<BlockContent />', () => {
  it('Check mount', () => {
    cy.mount(<BlockContent blockContent={localData.blockContent} />);
  });
});
