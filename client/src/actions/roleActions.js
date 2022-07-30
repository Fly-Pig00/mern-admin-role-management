import axios from "axios";
import {
    GET_ERRORS,
    ROLE_ADD,
    ROLES_FETCH
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

export const fetchRoles = () => dispatch => {
    axios
        .post("/api/role-data")
        .then(res =>
            dispatch({
                type: ROLES_FETCH,
                payload: res,
            })
        ).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
