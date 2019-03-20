import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from "./api";
import { loadTodosAction } from "./duck";

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const adaptMarvelDataToTodoItems = result => {
  return result.map(x => {
    return {
      id: x.id,
      text: x.name,
      completed: false,
    };
  });
};

export function* loadTodos() {

  const result = yield call(api.getMarvelData);

  const data = yield call(adaptMarvelDataToTodoItems, result);

  yield put(loadTodosAction(data));
}

export function* watchLoadTodos() {
  yield takeEvery('LOAD_TODOS_ASYNC', loadTodos)
}

export default function* rootSaga() {
  yield all([
    watchLoadTodos(),
  ]);
}
