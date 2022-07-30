import {
    ROLE_ADD
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    role: {},
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ROLE_ADD:
            return {
                role: action.payload
            };
        default:
            return state;
    }
}
