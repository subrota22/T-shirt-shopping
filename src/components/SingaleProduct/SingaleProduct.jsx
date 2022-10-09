import { TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import "./SingaleProduct.css" ;
const SingaleProduct = ({data ,removeItem}) => {
    return (
        <div>
          <div className="productDiv">
            <div className="image">
            <img src={data.picture} alt="products" className='productsImages' />
            </div>
        <div className="div">
        <p> Product name : {data.name} </p>
            <p>Quantity : {data.quantity}</p>
            <p>Price : {data.price* data.quantity} </p>
        </div>
     <div className="trash">
             <TrashIcon className="trsicon" id='trashIcon' onClick= {() => removeItem(data) }>
                 </TrashIcon > 
     </div>
          </div>
        </div>
    );
};

export default SingaleProduct;