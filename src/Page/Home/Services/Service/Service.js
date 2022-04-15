import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
  const { id, name, price, images } = service
  const navigate = useNavigate();
  const handleBtnTitle = id => {
    navigate(`/services/${id}`);


  };
  return (
    <div className='service'>
      <h2>{name}</h2>
      <p>{price}</p>
      <img src={images} alt="" />
      <br />
      <button onClick={() => handleBtnTitle(id)} className='btn btn-primary'> Book: {name}</button>

    </div>
  );
};

export default Service;