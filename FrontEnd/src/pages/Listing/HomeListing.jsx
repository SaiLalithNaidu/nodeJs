import React, { useState, useEffect } from 'react';
import '../Listing/HomeListing.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Product from '../../components/ProductCard/Product.jsx'
import menuList from '../../components/menuList.jsx';
import { categoryies } from '../../assets/assets';
const HomeListing = ({ url }) => {
  const [productsList, setProductsList] = useState([]); // Initialize as an array

  const fetchProductsList = async () => 
  {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.status === 200) 
      {
        setProductsList(response.data.data); // Set products to the state
      } 
      else 
      {
        toast.error('Error fetching product list');
      }
    } catch (error) {
      toast.error(`Error fetching product list: ${error.message}`);
    }
  };

  const menuListData = 
    {
      'image_1': categoryies.Biryani,
      'image_2': categoryies.Burger,
      'image_3': categoryies.Cake,
      'image_4': categoryies.Chinese,
      'image_5': categoryies.Dosa,
      'image_6': categoryies.IceCream,
      'image_7': categoryies.NorthIndian,
      'image_8': categoryies.Pizza,
      'image_9': categoryies.Rolls,
    };

  useEffect(() => {
    fetchProductsList();
  }, [url]);

  return (
    <div className='homeTabDiv bg-white my-2 mx-2 px-2 rounded-10'>
      <div className='d-flex justify-content-between mt-2'>
      {Object.values(menuListData).map((imageSrc, index) => (
          <div className='mx-2 cursor-pointer' key={index} >
            <img src={imageSrc} alt="" />
          </div>
        ))} 
      </div>
      {productsList.length > 0 ? (
        <div className='d-flex flex-wrap align-items-center justify-content-between'>
          {productsList.map((product, index) => (
            <Product key={index} data={product} url={url} />
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default HomeListing;
