import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_ALL_PRODUCTS, LOAD_PRODUCT } from "../constants/constProduct";
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

export const addProduct = (newProduct,navigate) => async dispatch => {
    dispatch({ type: LOAD_PRODUCT })
    try {
        const response = await axios.post("http://localhost:5000/api/product/add", newProduct)
        dispatch({ type: ADD_PRODUCT_SUCCESS })
        dispatch(getAllProducts())
        navigate("/")
    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_PRODUCT_FAIL })
    }
}