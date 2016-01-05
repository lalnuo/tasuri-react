import fetch from 'isomorphic-fetch'
import "babel-polyfill";
import { Map, List, fromJS } from 'immutable'


export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

function requestUsers() {
  return {
    type: REQUEST_USERS
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

function addingPurchase() {
  return {
    type: 'ADDING_PURCHASE'
  }
}

function addPurchase(purchase) {
  return {
    type: 'ADD_PURCHASE',
    purchase: fromJS(purchase)
  }
}


export function sendPurchase(purchase) {
    return dispatch => {
      dispatch(addingPurchase());
      return fetch('http://localhost:9000/purchases', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchase)
      }).then(response => response.json())
        .then(json => dispatch(addPurchase(json)));
    }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return fetch('http://localhost:9000/users')
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
  }
}
