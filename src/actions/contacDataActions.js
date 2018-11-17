import * as types from "./types";

export const addContactData = (value, inputField) => ({
    type: types.ADD_CONTACTDATA,
    payload: { value, inputField }
});

export const getContactData = (dataObject) => ({
    type: types.GET_CONTACTDATA,
    payload: dataObject
});
