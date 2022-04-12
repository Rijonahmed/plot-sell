import React from 'react';
import './service.css'

const Service = ({ service }) => {
  const { name, price, images } = service
  return (
    <div className='service'>
      <h2>{name}</h2>
      <p>{price}</p>
      <img src={images} alt="" />

    </div>
  );
};

export default Service;