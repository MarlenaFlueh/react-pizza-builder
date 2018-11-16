import * as types from "./types";

export const addAuthData = (value, inputField) => ({
    type: types.ADD_AUTHDATA,
    payload: { value, inputField }
})
