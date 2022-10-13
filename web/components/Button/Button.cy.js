import { Button } from '.';

const localData = {
  classes:
    'bg-peach hover:bg-peach40 border-transparent border-2 hover:border-heroblue hover:border-solid',
  children: 'Last inn flere sider'
};

describe('<Button />', () => {
  it('Check mount', () => {
    cy.mount(<Button children={localData.children} classes={localData.classes} />);
  });
});
