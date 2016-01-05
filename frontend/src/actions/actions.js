import fetch from 'isomorphic-fetch'
import "babel-polyfill";
import { Map, List, fromJS } from 'immutable'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_PURCHASES = 'RECEIVE_PURCHASES'
export const ADD_PURCHASE = 'ADD_PURCHASE'
export const DELETE_PURCHASE = 'DELETE_PURCHASE'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function fetchUsers() {
  return dispatch => {
    return fetch('http://localhost:9000/users')
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
  }
}

export function fetchPurchases() {
  return dispatch => {
    return fetch('http://localhost:9000/purchases')
      .then(response => response.json())
      .then(json => dispatch(receivePurchases(json)));
  }
}

function receiveUsers(users) {
  let usersMap = new Map();
  users.forEach(user => usersMap = usersMap.set(user.id, fromJS(user)));
  return {
    type: RECEIVE_USERS,
    users: usersMap
  }
}

function receivePurchases(purchases) {
  let purchasesMap = new Map();
  purchases.forEach(purchase => purchasesMap = purchasesMap.set(purchase.id, fromJS(purchase)));
  return {
    type: RECEIVE_PURCHASES,
    purchases: purchasesMap
  }
}

function addPurchase(purchase) {
  return {
    type: ADD_PURCHASE,
    purchase: fromJS(purchase)
  }
}

export function deletePurchase(purchaseId) {
  fetch('http://localhost:9000/purchases/' + purchaseId, { method: 'DELETE' });
  return {
    type: DELETE_PURCHASE,
    purchaseId: purchaseId
  }
}

export function sendPurchase(purchase) {
    return dispatch => {
      return fetch('http://localhost:9000/purchases', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(purchase)
      }).then(response => response.json())
        .then(json => dispatch(addPurchase(json)));
    }
}
