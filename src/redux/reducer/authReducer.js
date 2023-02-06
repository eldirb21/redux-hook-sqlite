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

const initialState = {
  isLoading: false,
  data: null,
  userSession: {},
  errors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //Action REGISTRASI
    case REGIST_USER_LOAD:
      return {
        ...state,
        isLoading: action.loading,
      };
    case REGIST_USER_SUCCESS:
      return {
        ...state,
        isLoading: action.loading,
        data: action.data,
      };
    case REGIST_USER_ERROR:
      return {
        ...state,
        isLoading: action.loading,
        errors: action.errors,
      };

    //Action LOGIN
    case LOGIN_USER_LOAD:
      return {
        ...state,
        isLoading: action.loading,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: action.loading,
        userSession: action.data,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: action.loading,
        errors: action.errors,
      };

    //Action LOGOUT
    case LOGOUT_USER_LOAD:
      return {
        ...state,
        isLoading: action.loading,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: action.loading,
        data: action.data,
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        isLoading: action.loading,
        errors: action.errors,
      };
    default:
      return state;
  }
};
