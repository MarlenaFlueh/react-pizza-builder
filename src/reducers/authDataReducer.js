import * as type from "../actions/types";

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
            },
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
            },
            touched: false
        }

    },
    formIsValid: false
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
                        value: action.payload.value
                    }
                }
            }
        }
        default:
            return state;

    }
}

export default authDataReducer;
