import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div className='aunty'>
       <div className="auntyChild">
       <h2> Hello I am aunty </h2>
            <h2>I have  <span className='houseStyle'>{house}</span> house </h2>
            <Cousin house={house}></Cousin>
       </div>
        </div>
    );
};

export default Aunty;