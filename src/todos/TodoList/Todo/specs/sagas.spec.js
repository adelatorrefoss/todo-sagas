import {delay, loadTodos} from "../sagas";

import {call, put} from 'redux-saga/effects'

describe('xxx', () => {
    it('xxx', () => {
        var gen = loadTodos();

        // gen.next().value
        expect(call(delay, 1000)).toEqual(
            gen.next().value
        );


        expect(put({
            type: 'LOAD_TODOS',
            payload: [
                {
                    text: 'Write the tests',
                    completed: false,
                    id: 0
                },
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ]
        })).toEqual(
            gen.next().value
        );

        expect({done: true, value: undefined})
            .toEqual(gen.next());
    });
});
