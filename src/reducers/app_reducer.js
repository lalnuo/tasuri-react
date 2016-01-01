import { Map, List, fromJS } from 'immutable'

export default (state = initalState, action) => {
  switch(action.get('type')) {
    case 'ADD_PURCHASE':
      return updateBalances(addPurchase(state, action));
    case 'REMOVE_PURCHASE':
      return state;
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
      console.log(id, balance, max, balance-max, balance == max ? 0 : balance - max)
      return balance == max ? 0 : balance - max;
    })
  });

  return state;
}
