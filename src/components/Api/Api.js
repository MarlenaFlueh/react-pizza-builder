const urlSignup = "http://localhost:8080/signup";
const urlLogin = "http://localhost:8080/login";

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

    fetch(urlSignup, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

// export const postOrder = async orderData => {
//     const res = await axios.post(urlOrder, {
//         orderData
//     });
//     return res.data;
// };
