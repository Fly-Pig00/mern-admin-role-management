import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import roleReducer from "./roleReducers";
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    role: roleReducer,
});