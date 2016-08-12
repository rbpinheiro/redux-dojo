import expect from 'expect';
import {visibilityFilter, todos} from '../src/reducers/reducers.js';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../src/actions/actions.js'


describe('todos', () => {
  const initialState = [];

  it('should handle visibilityFilter without state', () => {
    const action_test = {type: 'SET_VISIBILITY_FILTER', filter:'SHOW_ALL'};
    expect(visibilityFilter(null, action_test)).toBe('SHOW_ALL');
  });

  it('should handle todos', ()=> {
    const text = 'Test TODO';
    const action = { type: ADD_TODO, text }
    expect(todos(initialState, action)).toInclude({
      id: 0,
      text,
      completed: false
    });  
  });
  
});