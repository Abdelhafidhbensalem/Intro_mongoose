import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_ALL_PRODUCTS, LOAD_PRODUCT } from "../constants/constProduct";
import axios from "axios";

export const getAllProducts = (Searchcategory="",searchedName="") => async (dispatch) => {
    dispatch({ type: LOAD_ALL_PRODUCTS })
    try {
        const response = await axios.get(`http://localhost:5000/api/product/?category=${Searchcategory}&name=${searchedName}`)
        console.log(response);
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data.products })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error })
    }
}

export const addProduct = (newProduct, navigate) => async dispatch => {
    dispatch({ type: LOAD_PRODUCT })
    try {
        const response = await axios.post("http://localhost:5000/api/product/add", newProduct)
        dispatch({ type: ADD_PRODUCT_SUCCESS })
        dispatch(getAllProducts())
        navigate("/")
    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data.errors.name.message })
        alert(error.response.data.errors.name.message)
    }
}

export const deleteProduct = (id) => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/product/delete/${id}`)
        dispatch({ type: DELETE_PRODUCT_SUCCESS })
        dispatch(getAllProducts())

    } catch (error) {
        console.log(error);
        dispatch({ type: DELETE_PRODUCT_FAIL })
    }
}