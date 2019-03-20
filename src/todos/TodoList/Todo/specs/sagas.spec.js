import { adaptMarvelDataToTodoItems, loadTodos } from "../sagas";
import api from "../api";

import { call, put } from 'redux-saga/effects'
import { loadTodosAction } from "../duck";


jest.mock('../api');

describe('load todos', () => {
    describe('execution order', () => {
        const yeldOutput = 'fake';
        const gen = loadTodos();

        it('shoud call api getMarvelData', () => {
            expect(gen.next().value).toEqual(
                call(api.getMarvelData)
            );
        });

        it('shoud call adaptMarvelDataToTodoItems', () => {
            expect(gen.next(yeldOutput).value).toEqual(
                call(adaptMarvelDataToTodoItems, yeldOutput)
            );

        });

        it('shoud dispatch loadTodosAction', () => {
            expect(gen.next(yeldOutput).value).toEqual(
                put(loadTodosAction(yeldOutput))
            );
        });

        it('shoud finish the saga', () => {
            expect({ done: true, value: undefined })
                .toEqual(gen.next());
        });
    });
});

describe('adaptMarvelDataToTodoItems', () => {
    it('should normalize results when receives api data', () => {
        const apiResultFake = [
            { id: 1234, name: "John Doe", foo: "bar" },
            { id: 1234, name: "John Appleseed", foo: "xyz" },
        ];

        const expected = [
            { id: 1234, text: "John Doe", completed: false },
            { id: 1234, text: "John Appleseed", completed: false },
        ];

        expect(adaptMarvelDataToTodoItems(apiResultFake)).toEqual(expected)
    });
})