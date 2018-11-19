const urlSignup = "http://localhost:8080/signup";
const urlLogin = "http://localhost:8080/login";
const urlOrder = "http://localhost:8080/order";

export const getUser = async (email, password) => {
    try {
        const res = await fetch(urlLogin + "?email=" + email + "&password=" + password);
        const json = await res.json();
        return json;
    } catch (err) {
        return err;
    }
}

export const postUser = async (firstName, lastName, address, password, email) => {

    const data = {
        firstName,
        lastName,
        address,
        password,
        email
    };

    const res = await fetch(urlSignup, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

export const postOrder = async (orderObject) => {

    const res = fetch(urlOrder, {
        method: 'POST',
        body: JSON.stringify(orderObject),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}
