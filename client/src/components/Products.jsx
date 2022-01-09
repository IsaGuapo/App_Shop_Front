import React from 'react'
import Cardproduct from './Cardproduct';
import './Products.css'

const Products = ({productsArr}) => {

// para pintar los productos 
    return (<section className='container_products'>
          {productsArr.map((product, i) => <Cardproduct productsArr={product} key={product._id} />)}
      </section>) 
    
}

export default Products
