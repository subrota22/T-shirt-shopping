import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { checkLocaleStorageData } from '../LocalDb/localDb';
import "./Header.css" ;
const active = {
color: "lime" , 
fontSize: "28px"
}
const Header = () => {
const products = useLoaderData() ;
const [getDataHere , setDataHere] = useState([]) ;
    useEffect(() => {
   const getData= checkLocaleStorageData() ;
   let saveQuantiy = [] ;
   for(const id in getData) {
    const addedProduct = products.find(data => data._id === id) ;
    if(addedProduct ) {
     const newQuantity = getData[id] ;
     addedProduct.quantity = newQuantity ;
     saveQuantiy.push(addedProduct) ;
    }
   }
   setDataHere(saveQuantiy) ;
    } , [products]) ;
    return (
        <div className='header'>
            <NavLink to="/" style={({isActive}) =>  isActive ? active: undefined}>
                Tshirts </NavLink>
            <NavLink style={({isActive}) =>  isActive ? active: undefined} to="/about"> About </NavLink>
            <NavLink style={({isActive}) =>  isActive ? active: undefined} to="/props-drilling"> Props drilling </NavLink> 
            <NavLink  style={({isActive}) =>  isActive ? active: undefined} to="/context-api"> Context api </NavLink> 
   <span>       
   <ShoppingCartIcon className='shoppingIcon'></ShoppingCartIcon> 
      <span className='cartCount'> {getDataHere.length} </span>
   </span>
        </div>
    );
};

export default Header;