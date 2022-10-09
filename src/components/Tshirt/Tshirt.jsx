import React from 'react';
import "./Tshirt.css" ;
import {ShoppingCartIcon } from '@heroicons/react/24/solid'
const Tshirt = ({tshirt , handleAddToCart , cart}) => {
const {price , picture , name , gender} = tshirt ;
const backColor = {
    backgroudColor : "red"
}
    return (
        <div>
            <div className="tshirt-info">
            <div className="image-div">
            <img src={picture ? 
                picture : "https://static.thenounproject.com/png/2207098-200.png"} 
                alt="tshirt" className='tshirt-image'/>
            </div>
            <div className="text-div">
            <p> Price : ${price ? price : "price not found "} </p>
                <p>Product name : {name ? name : "name not found"} </p>
                <p>Gender : {gender ? gender : "gender not found"} </p>
                <button className='add-to-cart-button' 
                disabled={cart.lenght === 5 ? backColor : undefined}
                onClick={() => handleAddToCart(tshirt)}> 
                  Add to cart  
                 <ShoppingCartIcon className="icon"/>
                 </button>
            </div>
            </div>
        </div>
    );
};

export default Tshirt;