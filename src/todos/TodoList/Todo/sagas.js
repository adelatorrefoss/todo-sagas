import { call, put, takeEvery, all } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* loadTodos() {
  yield call(delay,1000);

  yield put({
    type: 'LOAD_TODOS', payload: [
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