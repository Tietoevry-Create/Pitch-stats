import { Category } from '../../components/Category';

const localData = {
  _createdAt: '2022-08-08T14:13:05Z',
  _id: '9908a364-4a79-46d2-976c-a175404f4943',
  _rev: 'fT2DAxGuAIAZVP80ZJWfQH',
  _type: 'category',
  _updatedAt: '2022-09-06T10:24:38Z',
  lede: 'Nyheter er ny informasjon om hendelser av interesse for publikum, formidlet av en journalist gjennom ulike medier som for eksempel en nettside. Her en liste av de mest leste i Norge.',
  path: 'M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495...',
  slug: {
    _type: 'slug',
    current: 'nyheter'
  },
  title: 'Nyheter'
};

describe('<Category />', () => {
  it('Check mount', () => {
    cy.mount(<Category category={localData} />);
  });
});
