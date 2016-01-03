import fetch from 'isomorphic-fetch'
import "babel-polyfill";

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users
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
