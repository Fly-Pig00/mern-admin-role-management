import axios from "axios";
import {
    GET_ERRORS,
    ROLE_ADD,
    USER_UPDATE
} from "./types";

export const addRole = (roleData, history) => dispatch => {
    axios
        .post("/api/role-add", roleData)
        .then(res =>
            dispatch({
                type: ROLE_ADD,
                payload: res,
            })
        ).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


export const updateUser = (userData) => dispatch => {
    axios
        .post("/api/user-update", userData)
        .then(res =>
            dispatch({
                type: USER_UPDATE,
                payload: res,
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
