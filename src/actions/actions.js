/*
 * action types
 */

import fetch from 'isomorphic-fetch'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const APOLOGIZE = 'APOLOGIZE'

const API_URL = 'http://localhost:3001'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */


function saveTodo (text) {
  let header = new Headers()

    return fetch(`${API_URL}/todos`, {
      headers: { 'Accept': 'application/json'},
      method: 'POST',

      body: JSON.stringify({
        text: text,
        completed: false
      })
    });  
}

function apologize(error) {
  return {
    type: 'APOLOGIZE',
    error:error
  };
}


export function addTodo(text) {
  return function (dispatch) {
    return saveTodo(text).then(
      todo => dispatch(() => {return { type: ADD_TODO, text }}),
      error => dispatch(apologize(error))
    );
  };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}