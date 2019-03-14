import { getVisibleTodos } from "./VisibleTodoList";
import { VisibilityFilters } from "../actions";

describe("VisibleTodoList", () => {
  describe("getVisibleTodos", () => {
    describe("All", () => {
      test("Should return all Todo items on state", () => {
        const filter = VisibilityFilters.SHOW_ALL;
        const state = {
          todos: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: false,
            id: 1
          }
        ],
            visibilityFilter: filter
        };
        expect(getVisibleTodos(state)).toMatchObject([{ "completed": false, "id": 0, "text": "Run the tests" }, { "completed": false, "id": 1, "text": "Use Redux" }])
      });
      test("Should return all Todo items on state even when we have completed and uncompleted todos", () => {
        expect(getVisibleTodos({todos: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: true,
            id: 1
          }
        ], visibilityFilter: VisibilityFilters.SHOW_ALL})).toMatchObject([{ "completed": false, "id": 0, "text": "Run the tests" }, { "completed": true, "id": 1, "text": "Use Redux" }])
      });
    });
    describe("Completed", () => {
      test("Should return only completed Todo items on state", () => {
        expect(getVisibleTodos({todos: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: true,
            id: 1
          }
        ], visibilityFilter: VisibilityFilters.SHOW_COMPLETED})).toMatchObject([{ "completed": true, "id": 1, "text": "Use Redux" }])
      })
    });
    describe("Active", () => {
      test("Should return only active Todo items on state", () => {
        expect(getVisibleTodos({todos: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: true,
            id: 1
          }
        ], visibilityFilter: VisibilityFilters.SHOW_ACTIVE})).toMatchObject([{
          text: 'Run the tests',
          completed: false,
          id: 0
        }])
      })
    });
  });
});