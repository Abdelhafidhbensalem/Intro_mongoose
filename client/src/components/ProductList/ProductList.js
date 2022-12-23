import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'

const ProductList = () => {

  const products = useSelector(state => state.productReducer.products)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', gap: "10px",flexWrap:"wrap" }}>
      {products.map(el => <Product key={el._id} el={el} />)}
    </div>
  )
}

//[{}]  ==>[<Product {}/>]
export default ProductList