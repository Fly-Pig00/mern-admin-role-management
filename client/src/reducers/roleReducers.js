import {
    ROLE_ADD,
    ROLES_FETCH
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    data: {},
    added: {}
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ROLES_FETCH:
            return {
                ...state,
                data: action.payload
            }
        case ROLE_ADD:
            return {
                ...state,
                added: action.payload
            };
        default:
            return state;
    }
}
