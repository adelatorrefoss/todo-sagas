import {all, call, put, takeEvery} from 'redux-saga/effects'
import api from "./api";

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const adaptMarvelDataToTodoItems = result => {

    console.log(result);

    return [
        {
            text: 'from marvel Write the tests',
            completed: false,
            id: 0
        },
        {
            text: 'from marvel Run the tests',
            completed: false,
            id: 1
        }
    ];
};

export function* loadTodos() {

  const result = yield call(api.getMarvelData);

  const data = yield call(adaptMarvelDataToTodoItems, result);

  yield put({
    type: 'LOAD_TODOS', payload: data
  });
}

export function* watchLoadTodos() {
  yield takeEvery('LOAD_TODOS_ASYNC', loadTodos)
}

export default function* rootSaga() {
  yield all([
    watchLoadTodos(),
  ]);
}
