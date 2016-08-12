import expect from 'expect';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../src/actions/actions.js';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from '../src/actions/actions.js';

describe('actions', () => {
  var text = "Dojo RBS, super legal!",
  index = 14,
  filter = VisibilityFilters['SHOW_ALL'];

  it('should handle addTodo', () => {
    expect(addTodo(text)).toEqual({
      type: ADD_TODO,
      text: text
    });
  });

  it('should handle toggleTodo', () => {
    expect(toggleTodo(index)).toEqual({
      type: TOGGLE_TODO,
      index: index
    });
  });

  it('should handle setVisibilityFilter', () => {
    expect(setVisibilityFilter(filter)).toEqual({
      type: SET_VISIBILITY_FILTER,
      filter: filter
    });
  });

});