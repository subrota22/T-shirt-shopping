import React from 'react';
import SpecialPerson from '../SpecialPerson/SpecialPerson';

const Cousin = ({house}) => {
    return (
        <div className='cousin'>
       <div>
       <h2> Hello i am cousin </h2>
            <h2> I have  <span className='houseStyle'>{house}</span>   house </h2>
       </div>
       <SpecialPerson></SpecialPerson>
        </div>
    );
};

export default Cousin;