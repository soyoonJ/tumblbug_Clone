// 액션 만들어주는 것들
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { RESP } from '../../shared/response';

// mock API
const respLogin = RESP.LOGIN;

// actions
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

// action creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
// defaultProps 같은 역할
const initialState = {
  // user: null,
  // is_login: false,
};

const loginDB = () => {
  // return function (dispatch, getState, { history }) {};
  if (respLogin.result) {
  }
};

const signupDB = () => {
  return function (dispatch, getState, { history }) {};
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {};
};

const logout = () => {
  return function (dispatch, getState, { history }) {};
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  loginDB,
  signupDB,
  loginCheckDB,
  logout,
  getUser,
};

export { actionCreators };
