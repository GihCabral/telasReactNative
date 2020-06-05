import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess } from '~/store/modules/auth/actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.recurso) {
    console.tron.error('usuario não é um recurso');
    return;
  }
  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
