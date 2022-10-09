import React, { useContext } from 'react';
import { houseContext, moneyText } from '../GrandFather/GrandFather2';

const Brother = () => {
const [money , setMoney] = useContext(moneyText) ;
const [house , setHouse] = useContext(houseContext) ;
    return (
        <div className='brother' style={{display:"flex" , flexDirection:"column"}}>
   <div className="div">
   <h2> Hello I am brother</h2> 
         <h2> I have <span className='houseStyle'>{house}</span>  house </h2>  
         <h3> Money : {money}</h3>
   </div>
   <button  className={house===12 ? "alertMessage" : "button"} disabled={house >= 20}  
        onClick={() => setHouse(house+2)}>  +  </button>
            <button className={house===1 ? "alertMessage" : "button"} disabled={house <= 1}  
        
            onClick={() => setHouse(house-2)}> - </button>
            <button className="moneyButton" onClick={() => setMoney(money + 500)}>Add 500 </button>
        </div>
    );
};

export default Brother;