import {adaptMarvelDataToTodoItems, loadTodos} from "../sagas";
import api from "../api";

import {call, put} from 'redux-saga/effects'


jest.mock('../api');

describe('load todos', () => {
    it('returns data', () => {
        var gen = loadTodos();


        const data = [
            {
                "id": 1011334,
                "name": "3-D Man"
            }
        ];

        api.getMarvelData.mockResolvedValue({data});

        let result = gen.next().value;

        // expect(call(fetch, "https://gateway.marvel.com:443/v1/public/characters?apikey=d70889377fa86672be37490f39941adc")).toEqual(
        expect(result).toEqual(
            call(api.getMarvelData)
        );



        expect(gen.next().value).toEqual(
            call(adaptMarvelDataToTodoItems, undefined)
        );


        expect(gen.next().value).toEqual(
            put({
                type: 'LOAD_TODOS',
                payload: [
                    {
                        text: 'Marvel Write the tests',
                        completed: false,
                        id: 0
                    },
                    {
                        text: 'Marvel Run the tests',
                        completed: false,
                        id: 1
                    }
                ]
            })
        );

        expect({done: true, value: undefined})
            .toEqual(gen.next());
    });
});
