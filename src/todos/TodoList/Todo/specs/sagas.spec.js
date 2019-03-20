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
