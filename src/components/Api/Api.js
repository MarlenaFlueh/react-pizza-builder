import axios from "axios";

const urlIngs = "http://localhost:8080/ingredients";
const urlOrder = "http://localhost:8080/order";

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

export const postOrder = async orderData => {
    const res = await axios.post(urlOrder, {
        orderData
    });
    return res.data;
};
