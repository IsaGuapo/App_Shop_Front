import React from 'react';

const Cardproduct = (productsArr) => {

    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-body">
                <h4 className="card-title">{productsArr.productsArr.name}</h4>
                <img src='' alt=''/>
                <p className="card-text">{productsArr.productsArr.price}</p>
                <p className="card-text">Fabricante</p>
                <button type="button" className="btn btn-dark">Ver más ..</button>
            </div>
        </div>
    )
}

export default Cardproduct
