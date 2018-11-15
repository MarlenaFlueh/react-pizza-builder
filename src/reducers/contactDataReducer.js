import * as types from "../actions/types";

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
    }
}

// bug in structure
const contactDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CONTACTDATA: {
            return {
                ...state,
                orderForm: {
                    ...state.orderForm,
                    [action.payload.inputField]: {
                        ...state.orderForm[action.payload.inputField],
                        ...state.orderForm[action.payload.inputField].elementConf,
                        value: [action.payload.value]
                    }
                }
            }
        }
        default:
            return state;
    }
}

export default contactDataReducer;