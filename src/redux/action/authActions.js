import {Alert} from 'react-native';
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOAD,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_LOAD,
  LOGOUT_USER_SUCCESS,
  REGIST_USER_ERROR,
  REGIST_USER_LOAD,
  REGIST_USER_SUCCESS,
} from '../../constants/action-type';
import {getSingle, post} from '../../utils/sqlite';

export const doRegist = data => dispatch => {
  dispatch({
    type: REGIST_USER_LOAD,
    loading: true,
  });
  return post('users', data)
    .then(res => {
      dispatch({
        type: REGIST_USER_SUCCESS,
        loading: false,
        data: res,
      });
    })
    .catch(error => {
      dispatch({
        type: REGIST_USER_ERROR,
        loading: false,
        errors: error,
      });
    });
};

export const doLogin = (data, nav) => dispatch => {
  dispatch({
    type: LOGIN_USER_LOAD,
    loading: true,
  });
  //Login aku pake get single harusnya post tapi karna ini sqlite belum bisa jwt
  return getSingle('users', data)
    .then(res => {
      nav.navigate('RootTab');
      dispatch({
        type: LOGIN_USER_SUCCESS,
        loading: false,
        data: res,
      });
    })
    .catch(error => {
      Alert.alert('Error', error);
      dispatch({
        type: LOGIN_USER_ERROR,
        loading: false,
        errors: error,
      });
    });
};

export const doLogout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER_LOAD,
    loading: true,
  });
  return post('')
    .then(res => {
      dispatch({
        type: LOGOUT_USER_SUCCESS,
        loading: false,
        data: res,
      });
    })
    .catch(error => {
      dispatch({
        type: LOGOUT_USER_ERROR,
        loading: false,
        errors: error,
      });
    });
};

export const clearStoreRegist = () => dispatch => {
  dispatch({
    type: REGIST_USER_SUCCESS,
    loading: false,
    data: null,
  });
};
