import { combineReducers } from "redux";
import { loading, errors, user, users, RESET_STORE } from "./reducers";

/* Import reducers */

const appReducer = combineReducers({
  loading,
  errors,
  user,
  users,
  /* Add reducers */
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
