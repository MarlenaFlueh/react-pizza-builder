import axios from "axios";

const urlIngs = "http://localhost:8080/ingredients";
const urlOrder = "http://localhost:8080/order";
const urlLogin = "http://localhost:8080/login";

// just for testing
export const getIngredients = async () => {
    try {
        const res = await fetch(urlIngs);
        const json = await res.json();
        return json;
    } catch (err) {
        return err;
    }
}

export const getUser = async (email, password) => {
    try {
        const res = await fetch(urlLogin, {
            email,
            password
        });
        const json = await res.json();
        return json;
    } catch (err) {
        return err;
    }
}

export const postOrder = async orderData => {
    const res = await axios.post(urlOrder, {
        orderData
    });
    return res.data;
};
