import React, { createContext, useState } from 'react';
import "./GrandFather.css" ; 
import Father from "../Father/Father"
import Aunty from '../Aunty/Aunty';
export const diamondRing = createContext() ;
export const moneyText = createContext(100) ;
export const houseContext = createContext(4) ;
//component
const GrandFather2 = () => {
const [house , setHouse ] = useState(4) ;
const [money , setMoney ] = useState(100) ;
const increesHouse = () => {
const newHouse  = house + 1 ;
setHouse(newHouse) ;
}

const decreesHouse = () => {
    const newHouse  = house - 1 ;
    setHouse(newHouse) ;
    } ;
    return (
<diamondRing.Provider value={ `Diamond ring , Gold ring ${house}` }>
<moneyText.Provider value={[money , setMoney]}>
<houseContext.Provider value={[house , setHouse]}>
<div className='grandPa'>
      <div className="styleOfButton">
      <h2> This is Grand Father </h2>
            <h2> I am owener of <span className='houseStyle'>{house}</span> house </h2>
            <button  className={house===12 ? "alertMessage" : "button"} disabled={house === 12}  onClick={() => increesHouse()}>Get house  </button>
            <button className={house===1 ? "alertMessage" : "button"} disabled={house === 1}  
        
            onClick={() => decreesHouse()}>Lost house  </button>
      </div>
            <Father house={house} decreesHouse={decreesHouse} increesHouse={increesHouse}></Father>
            <Aunty house={house} decreesHouse={decreesHouse} increesHouse={increesHouse}></Aunty>
        </div>
</houseContext.Provider>
        
</moneyText.Provider>
</diamondRing.Provider>
    );
};


export default GrandFather2;