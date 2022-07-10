import {
  CLEAR_ERROR,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from '../../constants';

import clientAxios from '~/apis';

export const login = (dataForm) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await clientAxios.post('/user/login', dataForm);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const register = (dataForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    const { data } = await clientAxios.post('user/register', dataForm);

    dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILURE, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await clientAxios.get('/user/me');

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await clientAxios.get('/user/logout');

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.response.data.message });
  }
};
