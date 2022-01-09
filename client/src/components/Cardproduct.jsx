import React from 'react';

const Cardproduct = (productsArr) => {

    return (
        <div className="card bg-light mb-3" >
        <div className="card-body">
          <h4 className="card-title">{productsArr.productsArr.name}</h4>
          <img src='' alt=''/>
          <p className="card-text">{productsArr.productsArr.price}</p>
          <p classNameName="card-text">Fabricante</p>
          <button type="button" className="btn btn-success">Ver más...</button>
        </div>
      </div>
    )
}

export default Cardproduct
