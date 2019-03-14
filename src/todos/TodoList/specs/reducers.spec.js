import reducers, {VisibilityFilters} from "../todoList";

describe('reducers reducer', () => {
    it('should handle initial state', () => {
        expect(reducers(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
    });

    it('should handle ADD_TODO', () => {
        expect(reducers(
            [],
            {
                type: 'ADD_TODO',
                text: 'Run the tests',
                id: 0
            })).toEqual(
            [{
                text: 'Run the tests',
                completed: false,
                id: 0
            }]);

        expect(
            reducers([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'ADD_TODO',
                text: 'Use Redux',
                id: 1
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }, {
                text: 'Use Redux',
                completed: false,
                id: 1
            }
        ]);

        expect(
            reducers([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 1
                }
            ], {
                type: 'ADD_TODO',
                text: 'Fix the tests',
                id: 2
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }, {
                text: 'Use Redux',
                completed: false,
                id: 1
            }, {
                text: 'Fix the tests',
                completed: false,
                id: 2
            }
        ]);
    });
});