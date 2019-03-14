import * as actions from '../todoList';
import {setVisibilityFilter} from "../../Footer/filterLink";

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    });
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    });
  });
});
