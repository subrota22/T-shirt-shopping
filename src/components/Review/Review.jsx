import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Inventory from '../Inventory/Inventory';
import { deleteDataFromLocalStorage } from '../LocalDb/localDb';
import SingaleProduct from '../SingaleProduct/SingaleProduct';
import "./Review.css" ;
const Review = () => {
const   { storeNewData } = useLoaderData() ;
const [cart , setCart] = useState(storeNewData) ;
const removeItem = (item) => {
    const remainingData = cart.filter(cartData => cartData._id !== item._id ) ;
    setCart(remainingData) ;
    deleteDataFromLocalStorage(item._id) ;
    toast.success(`Your  ${item.name} tshirt is romoved !! ` , {
      position:"top-center" 
    }) 
    }
    
    return (
       <div>
        <div className="parentDiv">
        <div className='textStyle'>
        
            {
                cart.length === 0 ?
                  <h2>No product found <NavLink to="/">Shop now </NavLink> </h2>
                 :     <h2> Total {cart.length } product found </h2>
            }
            {
                cart.map(data => <SingaleProduct removeItem={removeItem} key={data._id} data={data} ></SingaleProduct>)
            }
        </div>
        <div className="rev">
        <Inventory cart={cart} removeItem={removeItem}> 
        <button className='homePage'> <NavLink to="/">Home</NavLink> </button>
         </Inventory>
        </div>
        </div>
       </div>
    );
};

export default Review;