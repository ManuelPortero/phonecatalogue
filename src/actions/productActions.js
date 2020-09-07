import { FETCH_PRODUCTS } from "./types"

export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/phones").then(res => res.json())
    .then(data => {
        
        return dispatch({ type:FETCH_PRODUCTS, payload: data});    

    });
}