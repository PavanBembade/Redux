import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRegisterReducer from "./authRegisterReducer";

const rootReducers = combineReducers({
    addItem,
    auth: authReducer,
    authRegister: authRegisterReducer
})

export default rootReducers;