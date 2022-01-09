import React from 'react'
import Cardproduct from './Cardproduct';

const Products = ({productsArr}) => {
// para pintar los productos 
    return (<section className='col-12 p-5 row'>
    {productsArr.map((product, i) => <Cardproduct productsArr={product} key={product._id} />)}
      </section>) 
    
}

export default Products
