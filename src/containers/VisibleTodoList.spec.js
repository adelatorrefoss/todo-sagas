import {VisibilityFilters} from "../actions";
import {visibleTodosSelector} from "../selectors";

describe("Selecting visible todos with filter", () => {
    describe("ALL", () => {
        test("Should return all Todo items on state", () => {
            expect(visibleTodosSelector.resultFunc(
                VisibilityFilters.SHOW_ALL,
                [{
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 1
                }])).toMatchObject([{
                "completed": false,
                "id": 0,
                "text": "Run the tests"
            }, {"completed": false, "id": 1, "text": "Use Redux"}]);
        });
        test("Should return all Todo items on state even when we have completed and uncompleted todos", () => {
            expect(visibleTodosSelector.resultFunc(
                VisibilityFilters.SHOW_ALL,
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 0
                    }, {
                    text: 'Use Redux',
                    completed: true,
                    id: 1
                }
                ])).toMatchObject([{"completed": false, "id": 0, "text": "Run the tests"}, {
                "completed": true,
                "id": 1,
                "text": "Use Redux"
            }]);
        });
    });
    describe("filtering only the completed ones", () => {
        test("", () => {
            expect(visibleTodosSelector.resultFunc(
                VisibilityFilters.SHOW_COMPLETED,
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 0
                    }, {
                    text: 'Use Redux',
                    completed: true,
                    id: 1
                }
                ])).toMatchObject([{
                "completed": true,
                "id": 1,
                "text": "Use Redux"
            }]);
        })
    });
    describe("filtering only the active ones", () => {
        test("Should return only active Todo items on state", () => {
            expect(visibleTodosSelector.resultFunc(
                VisibilityFilters.SHOW_ACTIVE,
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 0
                    }, {
                    text: 'Use Redux',
                    completed: true,
                    id: 1
                }
                ])).toMatchObject([{
                text: 'Run the tests',
                completed: false,
                id: 0
            }]);
        })
    });
});