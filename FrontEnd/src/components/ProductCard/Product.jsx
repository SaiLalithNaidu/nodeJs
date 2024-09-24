import React from 'react';
import '../ProductCard/Product.css';

const Product = ({ data, url }) => {
  return (
    <div className='productCarDiv'>
      <div className='d-flex flex-column justify-content-start'>
        <img src={`${url}/images/${data.image}`} alt={data.name} className='imagTag' />
        <h2 className='font-b'>{data.name}</h2>
        <span>{data.description}</span>
        <div className='d-flex justify-content-between'>
          <span>Rs{data.price}</span>
          <button>Add</button>
        </div>
        
      </div>
    </div>
  );
};


export default Product;
