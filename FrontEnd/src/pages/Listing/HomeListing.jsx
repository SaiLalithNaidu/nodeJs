import React, { useState, useEffect } from 'react';
import '../Listing/HomeListing.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Product from '../../components/ProductCard/Product.jsx'

const HomeListing = ({ url }) => {
  const [productsList, setProductsList] = useState([]); // Initialize as an array

  const fetchProductsList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.status === 200) {
        setProductsList(response.data.data); // Set products to the state
        console.log(response.data.data); // Log the actual response data
      } else {
        toast.error('Error fetching product list');
      }
    } catch (error) {
      toast.error(`Error fetching product list: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, [url]); // Include 'url' in dependency array

  return (
    <div className='homeTabDiv bg-white my-2 mx-2 px-2 rounded-10'>
      {/* Render the list of products if available */}
      {productsList.length > 0 ? (
        <ul className='d-flex'>
          {productsList.map((product, index) => (
            // <li key={index}>{product.name}
            //     <img src={`${url}/images/${product.image}`}/>
            // </li> // Adjust based on your actual data structure
            <Product key={index} data={product} url={url} />
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default HomeListing;
