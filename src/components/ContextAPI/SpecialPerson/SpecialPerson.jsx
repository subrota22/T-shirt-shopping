
import React, { useContext } from 'react';
import { diamondRing } from '../GrandFather/GrandFather2';

const SpecialPerson = () => {
const showDiamond = useContext(diamondRing) ;
    return (
        <div className='SpecialPerson'>
            <h2> I am with cousin {showDiamond} </h2>
        </div>
    );
};

export default SpecialPerson;