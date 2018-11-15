import * as types from "./types";

export const addContactData = (value, inputField) => ({
    type: types.ADD_CONTACTDATA,
    payload: { value, inputField }
});
