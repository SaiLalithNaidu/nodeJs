import React, { useState,useEffect } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {

const [list,setList] = useState([]);

const fetchList = async() =>
{ 
  const response = await axios.get(`${url}/api/food/list`);
  if (response.status === 200)
  {
    setList(response.data.data);
  }
  else
  {
    toast.error(`Error`);
  }

}

const removeFoodItem = async(foodId) =>
{
  const resoponse = await axios.post(`${url}/api/food/remove`,{id:foodId});
  await fetchList();
  if(resoponse.data.success)
  {
    toast.success(`Food Item removed successfully`);
  }
  else 
  {
    toast.error(`Error`);
  }
}

useEffect(() =>
{
  fetchList();
 
},[]);

  return (
    <div className='list add flex-col'>
      <p>All Foods</p>
      <div className="list-table-formate tittle">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return(
          <div key={index} className="list-table-formate">
            <img className="list-in-image" src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p onClick={()=>removeFoodItem(item._id)} className='cursor'>X</p>
          </div>
        )
      })}
    </div>
  )
}

export default List