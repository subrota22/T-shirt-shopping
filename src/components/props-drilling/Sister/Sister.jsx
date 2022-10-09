import React from 'react';

const Sister = ({house}) => {
    return (
        <div className='sister'>
      <div style={{display:"flex" , flexDirection:"column"}}>
      <h2> Hello I am sister </h2>
            <h2> I have  <span className='houseStyle'>{house}</span>  house .. </h2>
      </div>
        </div>
    );
};

export default Sister;