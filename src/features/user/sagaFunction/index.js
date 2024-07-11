// src/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../userSlice';

// Dummy API function to fetch users
const fetchUsersAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return await response.json();
};

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersAPI);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
}

export default function* rootSaga() {
  yield watchFetchUsers();
}
