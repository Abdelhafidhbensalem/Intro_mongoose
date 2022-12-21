import { GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_ALL_PRODUCTS } from "../constants/constProduct";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_ALL_PRODUCTS })
    try {
        const response = await axios.get("http://localhost:5000/api/product/")
        console.log(response);
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data.products })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error })
    }
}