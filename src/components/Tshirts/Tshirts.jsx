import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import Tshirt from '../Tshirt/Tshirt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Tshirts.css" ;
import { checkLocaleStorageData, deleteDataFromLocalStorage, storeDataToLocalStorage }
from '../LocalDb/localDb';
const Tshirts = () => {
const tshirtsData = useLoaderData() ;
const [cart , setCart ] = useState([]) ;

// compaire api data  with local storage 
useEffect(() => {
const cartItem = checkLocaleStorageData() ;

let storeCartItem = [] ;
for(let id in cartItem) {
const addedProduct = tshirtsData.find(data => data._id === id ) ;

if(addedProduct) {
const cartQuantity  = cartItem[id] ;
addedProduct.quantity = cartQuantity ;
storeCartItem.push(addedProduct) ; //object of products 
}
}
setCart(storeCartItem)
 } ,[tshirtsData]) ;
const handleAddToCart = (tshirt) => {
//start store id 
let existed = cart.find(ts => ts._id === tshirt._id)  ;
let newCart = [] ;
if(!existed) {
tshirt.quantity = 1 ;
newCart = [...cart , tshirt] ;
} else{
const rest = cart.filter(tshirtData => tshirtData._id !== tshirt._id) ;
tshirt.quantity = tshirt.quantity + 1 ;
newCart = [...rest , existed] ;
}
setCart(newCart) ;
const checkStorageIsOkOrNot = storeDataToLocalStorage(tshirt._id) ;
//end stored id 
if (checkStorageIsOkOrNot)  {
  toast.success(`Your  tshirt added successfully !! ` , {
    position:"top-center" 
  }) ;
}
 if(existed) {
toast.warn("Don't select more than one item!" ,  {
  position: "top-center",
  });
} else{
if(cart.length === 5 ) {
  toast.info("You can not select more than 5 tshirt" , {
    position: "top-let",
  })
}
  }
}
//[cart will take all object , prev obj + current obj] / cart will recive /

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
      <h2 className='tshirtsTitle'>This is tshirts page  </h2>
         <div className="products-all-info">
         <div className="all-tshrit">
           {
                tshirtsData.map(tshirt => <Tshirt key={tshirt._id} 
                    handleAddToCart ={handleAddToCart}
                    tshirt={tshirt} cart={cart}></Tshirt>)
            }
    
           </div>
           <div className="product-added">
           <Inventory  removeItem={removeItem} cart={cart}>
           <button className='reviewButton'>  <NavLink to="/review">  review   </NavLink> </button>
            </Inventory> {/* cart will accessable to the another component */}
           </div>
           <ToastContainer></ToastContainer>
         </div>
        </div>
    );
};

export default Tshirts;