import React from 'react';

const Brother = ({house , increesHouse , decreesHouse}) => {
    return (
        <div className='brother' style={{display:"flex" , flexDirection:"column"}}>
   <div className="div">
   <h2> Hello I am brother</h2> 
         <h2> I have <span className='houseStyle'>{house}</span>  house </h2>  
   </div>
   <button  className={house===12 ? "alertMessage" : "button"} disabled={house === 12}  
        onClick={() => increesHouse()}>  +  </button>
            <button className={house===1 ? "alertMessage" : "button"} disabled={house === 1}  
        
            onClick={() => decreesHouse()}> - </button>
        </div>
    );
};

export default Brother;