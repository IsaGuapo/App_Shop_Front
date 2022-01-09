import React from 'react';
import accounting from 'accounting';


const Cardproduct = ({productsArr}) => {
  const {name, price,rating, img, fab:{name:nameFab, address, cif }} = productsArr;
    
  return (
      <section className="card bg-light mb-3" >
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <img src={img} alt='' />
          <p className="card-text">{accounting.formatMoney(price, "€", 2, ".", ",")}</p>
            <div className='div_card mt-5 border-top'>
              <p className="card-text">{nameFab}</p>
              <p className="card-text">CIF :{cif}</p>
              <p className="card-text">Dirección :{address}</p>
            </div>
          <p className="card-text mt-3">Valoración : {rating}</p>
          <button type="button" className="btn btn-success">ver más ...</button>
        </div>
      </section>
    )
}

export default Cardproduct;
