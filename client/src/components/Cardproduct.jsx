import React from 'react';

const Cardproduct = ({productsArr}) => {
  const {name, price, img, fab:{name:nameFab, address, cif }} = productsArr;
    return (
       
      <div className="card bg-light mb-3" >
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <img src={img} alt='' />
          <p className="card-text">{price}</p>
          <p className="card-text">{nameFab}</p>
          <p className="card-text">{cif}</p>
          <p className="card-text">{address}</p>
          <button type="button" className="btn btn-success">ver más ...</button>
        </div>
      </div>
     
    )
}

export default Cardproduct
