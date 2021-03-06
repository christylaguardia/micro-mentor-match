export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const ERROR_ADD = "ERROR_ADD";
export const ERROR_REMOVE = "ERROR_REMOVE";
export const SIGN_OUT = "SIGN_OUT";
export const RESET_STORE = "RESET_STORE";
export const FETCHED_USER = "FETCHED_USER";
export const GET_USERS = "GET_USERS";

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export function loading(state = false, { type }) {
  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
}

// TODO: not handling multiple errors ATM
export function errors(state = null, { type, payload }) {
  switch (type) {
    case ERROR_ADD:
      return payload;
    // return [state, payload];
    case ERROR_REMOVE:
    default:
      return state;
  }
}

export function user(state = {}, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return { ...state, isAuthenticated: true, ...payload };
    case FETCHED_USER:
      return { ...state, data: payload };
    case SIGN_OUT:
    case RESET_STORE:
      return null;
    default:
      return state;
  }
}

export function users(state = [], { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    case SIGN_OUT:
    case RESET_STORE:
      return null;
    default:
      return state;
  }
}
