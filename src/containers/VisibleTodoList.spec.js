import { getVisibleTodos } from "./VisibleTodoList";
import { VisibilityFilters } from "../actions";

describe("VisibleTodoList", () => {
  describe("getVisibleTodos", () => {
    describe("All", () => {
      test("Should retunr all Todo items on state", () => {
        expect(getVisibleTodos([
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: false,
            id: 1
          }
        ], VisibilityFilters.SHOW_ALL)).toMatchObject([{ "completed": false, "id": 0, "text": "Run the tests" }, { "completed": false, "id": 1, "text": "Use Redux" }])
      })
      test("Should retunr all Todo items on state even when we have completed and uncompleted todos", () => {
        expect(getVisibleTodos([
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: true,
            id: 1
          }
        ], VisibilityFilters.SHOW_ALL)).toMatchObject([{ "completed": false, "id": 0, "text": "Run the tests" }, { "completed": true, "id": 1, "text": "Use Redux" }])
      })
    });
    // describe("Completed", () => {
    // });
    // describe("Active", () => {
    // });
  });
});