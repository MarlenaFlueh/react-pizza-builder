import * as types from "../actions/types";
import { checkValidity } from "../utils";

const initialState = {
    orderForm: {
        firstName: {
            elementConf: {
                type: "text",
                placeholder: "First name"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        lastName: {
            elementConf: {
                type: "text",
                placeholder: "Last name"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        address: {
            elementConf: {
                type: "text",
                placeholder: "Your address"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        email: {
            elementConf: {
                type: "email",
                placeholder: "Your email"
            },
            value: "",
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementConf: {
                type: "password",
                placeholder: "Choose a password"
            },
            value: "",
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    },
    formIsValid: false
}

const contactDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CONTACTDATA: {

            const updatedForm = {
                ...state.orderForm,
                [action.payload.inputField]: {
                    ...state.orderForm[action.payload.inputField],
                    ...state.orderForm[action.payload.inputField].elementConf,
                    value: action.payload.value,
                    valid: checkValidity(action.payload.value, state.orderForm[action.payload.inputField].validation),
                    touched: true
                }
            }

            let formIsValid = true;
            for (let key in updatedForm) {
                formIsValid = updatedForm[key].valid && formIsValid;
            }

            return {
                ...state,
                orderForm: updatedForm,
                formIsValid
            }
        }
        case types.GET_CONTACTDATA: {

            const newForm = {};
            for (let key in action.payload) {

                newForm[key] = {
                    ...state.orderForm[key].elementConf,
                    value: action.payload[key],
                    valid: true,
                    touched: true
                }

            }
            return {
                ...state,
                orderForm: newForm
            }
        }
        default:
            return state;
    }
}

export default contactDataReducer;