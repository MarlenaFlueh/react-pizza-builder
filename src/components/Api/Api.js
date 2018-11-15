const url = "http://localhost:8080/ingredients";



export const getIngredients = async () => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    } catch (err) {
        return err;
    }
}
