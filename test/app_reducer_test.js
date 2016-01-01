import expect from 'expect'
import reducer from '../src/reducers/app_reducer'
import { Map, List, fromJS } from 'immutable'

describe('adding purchases', () => {
  let state = fromJS({
    users: {
      1: { name: 'Lalli', balance: 0 },
      2: { name: 'Katja', balance: 0 }
    },
    purchases: []
  });

  const action = fromJS({
    type: 'ADD_PURCHASE',
    userId: 1,
    name: 'Bacon',
    price: 2
  });

  it('creates a new purchase', () => {
    expect(reducer(state, action).get('purchases'))
      .toEqual(fromJS([{name: 'Bacon', userId: 1, price: 2}]))
  });

  it('updates user balances correctly with two users', () => {
    expect(reducer(state, action).get('users'))
      .toEqual(fromJS({
        1: { name: 'Lalli', balance: 0 },
        2: { name: 'Katja', balance: -2 }
      }))
  });

  it ('updates user balances correctly with tree users', () => {
    state = state.updateIn(['users'], users => users.set('3', new Map({ name: 'Leevi', balance: -1.5 })));
    expect(reducer(state, action).get('users'))
      .toEqual(fromJS({
        1: { name: 'Lalli', balance: 0 },
        2: { name: 'Katja', balance: -2 },
        3: { name: 'Leevi', balance: -2 }
      }))
  });

  it ('updates user balances correctly with tree users when two users have purchases', () => {
    state = state.updateIn(['users'], users => users.set('3', new Map({ name: 'Leevi', balance: 0 })));
    const action2 = fromJS({
      type: 'ADD_PURCHASE',
      userId: 2,
      name: 'Bacon',
      price: 2
    });
    state = reducer(state, action2)
    expect(reducer(state, action).get('users'))
      .toEqual(fromJS({
        1: { name: 'Lalli', balance: 0 },
        2: { name: 'Katja', balance: 0 },
        3: { name: 'Leevi', balance: -2 }
      }))
  });
});
