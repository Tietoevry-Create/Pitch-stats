import { SiteList } from '../../components/SiteList';

const localData = {
  classes:
    'bg-peach hover:bg-peach40 border-transparent border-2 hover:border-heroblue hover:border-solid',
  children: 'Last inn flere sider'
};

describe('<SiteList />', () => {
  it('Check mount', () => {
    cy.mount(<SiteList siteList={[]} />);
  });
});
