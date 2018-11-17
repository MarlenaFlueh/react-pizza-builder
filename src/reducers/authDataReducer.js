import * as type from "../actions/types";
import { checkValidity } from "../utils";

const initialState = {
    orderForm: {
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
    formIsValid: true
}

const authDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_AUTHDATA: {

            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    [action.payload.inputField]: {
                        ...state.orderForm[action.payload.inputField],
                        ...state.orderForm[action.payload.inputField].elementConf,
                        value: action.payload.value,
                        valid: checkValidity(action.payload.value, state.orderForm[action.payload.inputField].validation),
                        touched: true
                    }
                },
                formIsValid: checkValidity(action.payload.value, state.orderForm[action.payload.inputField].validation)
            }
        }
        default:
            return state;

    }
}

export default authDataReducer;
