import { Map, List, fromJS } from 'immutable'
const initialState = fromJS({
  purchases: {},
  users: [],
});

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PURCHASE':
      return updateBalances(addPurchase(state, action));
    case 'REQUEST_USERS':
      return state;
    case 'RECEIVE_USERS':
      return state.set('users', action.users);
    case 'REMOVE_PURCHASE':
      return state;
    case 'REMOVE_PURCHASE':

    default:
      return state;
  }
}

function addPurchase(state, action) {
  let purchase = action.purchase;
  return state.update('purchases', purchases => purchases.set(purchase.get('id'), purchase));
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
