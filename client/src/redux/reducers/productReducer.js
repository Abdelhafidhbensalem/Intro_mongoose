import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_ALL_PRODUCTS } from "../constants/constProduct";

const inittialState = {
    products: [],
    errors: null,
    loading: false
};

export const productReducer = (state = inittialState, { type, payload }) => {

    switch (type) {
        case LOAD_ALL_PRODUCTS:
            return { ...state, loading: true }
        case GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, products: payload, loading: false }
        case GET_ALL_PRODUCTS_FAIL:
            return { ...state, errors: payload, loading: false }
        case ADD_PRODUCT_FAIL:
            return { ...state, errors: payload, loading: false }
    
        default:
            return state
    }

}