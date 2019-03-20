import {adaptMarvelDataToTodoItems, loadTodos} from "../sagas";
import api from "../api";

import {call, put} from 'redux-saga/effects'


jest.mock('../api');

describe('xxx', () => {
    it('xxx', () => {
        var gen = loadTodos();


        api.getMarvelData.mockResolvedValue({data: ''});

        let result = gen.next().value;

        // expect(call(fetch, "https://gateway.marvel.com:443/v1/public/characters?apikey=d70889377fa86672be37490f39941adc")).toEqual(
        expect(call(api.getMarvelData)).toEqual(
            result
        );


        expect(call(adaptMarvelDataToTodoItems, undefined)).toEqual(
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
