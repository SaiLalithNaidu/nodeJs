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

  function selectedMenu(index,name)
  {
    const filteredProducts = productsList.filter(product => product.category === name);
    setProductsList(filteredProducts);
    // toast.info(`Showing ${selectedCategory} products`);
  };

  const menuListData = [
    {
      'image': categoryies.Biryani,
      'name': 'Biryani'
    },
    {
      'image': categoryies.Burger,
      'name': 'Burger'
    },
    {
      'image': categoryies.Cake,
      'name': 'Cake'
    },
    {
      'image': categoryies.Chinese,
      'name': 'Chinese'
    },
    {
      'image': categoryies.Dosa,
      'name': 'Dosa'
    },
    {
      'image': categoryies.IceCream,
      'name': 'IceCream'
    },
    {
      'image': categoryies.NorthIndian,
      'name': 'North Indian'
    },
    {
      'image': categoryies.Pizza,
      'name': 'Pizza'
    },
    {
      'image': categoryies.Rolls,
      'name': 'Rolls'
    }
  ];
  
  useEffect(() => {
    fetchProductsList();
  }, [url]);

  return (
    <div className='homeTabDiv bg-white my-2 mx-2 px-2 rounded-10'>
      <div className='d-flex justify-content-between mt-2'>
        {menuListData.map((item, index) => (
          <div className='mx-2 cursor-pointer' key={index}>
            <img src={item.image} alt={item.name} onClick={() => selectedMenu(index,item.name)} />
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
