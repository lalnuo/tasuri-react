import { Map, List, fromJS } from 'immutable'
const initialState = fromJS({
  purchases: [],
  users: [],
  loading: {}
});

export default (state = initialState, action) => {
  console.log('HELLO: ', action)

  switch(action.type) {
    case 'ADD_PURCHASE':
      return updateBalances(addPurchase(state, action));
    case 'REQUEST_USERS':
      return state;
    case 'RECEIVE_USERS':
      console.log('users: ', action.users)
      return state.set('users', action.users);
    case 'REMOVE_PURCHASE':
      return state;
    case 'REMOVE_PURCHASE':

    default:
      return state;
  }
}

function addPurchase(state, action) {
  return state.updateIn(['purchases'],
    purchases => purchases.push(new Map({
      name: action.get('name'),
      userId: action.get('userId'),
      price: action.get('price')
    }))
  );
}

function removePurchase(state, action) {
}

function updateBalances(state) {
  let consumingByUserId = {};
  let max = 0;
  state.get('purchases').forEach(purchase => {
    let userId = purchase.get('userId');
    if (!consumingByUserId[userId]) consumingByUserId[userId] = 0;
    consumingByUserId[userId] += purchase.get('price');
    if (consumingByUserId[userId] > max) max = consumingByUserId[userId];
  });

  state.get('users').forEach((_, id) => {
    state = state.updateIn(['users', id, 'balance'], () => {
      let balance = (consumingByUserId[id] || 0);
      return balance == max ? 0 : balance - max;
    })
  });

  return state;
}
