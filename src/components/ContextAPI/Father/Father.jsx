import React from 'react';
import Sister from "../Sister/Sister" ;
import Brother from "../Brother/Brother" ;
import Mother from '../Mother/Mother';
const Father = ({house , increesHouse  , decreesHouse } ) => {
    return (
        <div className='father' >
        <div className="fatherChild " >
        <h2> Hello I am father </h2>
            <h2> I have  <span className='houseStyle'>{house}</span>  house </h2>
        </div>
        
        <Mother></Mother>
        <Sister house={house}> </Sister>
        <Brother house={house} increesHouse={increesHouse} decreesHouse={decreesHouse} ></Brother>
        <button  className={house===12 ? "alertMessage" : "button"} disabled={house === 12}  
        onClick={() => increesHouse()}> +  </button>

   <button  className={house===12 ? "alertMessage" : "button"} disabled={house === 12}  
        onClick={() => decreesHouse()}> -  </button>
        </div>
    );
};

export default Father;