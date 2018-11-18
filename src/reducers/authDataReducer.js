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
                placeholder: "Your password"
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
    formIsValid: false,
    error: false
}

const authDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_AUTHDATA: {

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
                formIsValid,
                error: false
            }
        }
        case type.AUTH_FAILED: {
            return {
                ...state,
                ...state.orderForm,
                ...state.formIsValid,
                error: true
            }
        }
        default:
            return state;

    }
}

export default authDataReducer;
