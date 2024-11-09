import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name: '',
        description: '',
        category: 'salad',
        price: '',
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('price', Number(data.price));
            formData.append('category', data.category);
            formData.append('image', image);
    
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.status === 201) {
                console.log('Success:', response.data.message);
                setData({ name: '', description: '', category: 'salad', price: '' });
                setImage(false);
                toast.success(`Food added successfully`);
            } else {
                toast.error(`Food addded unsuccessful`);
            }
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response) {
                console.error('Server Response Error:', error.response.data);
            }
        }
    };
    

  return (
    <div className='add'>
        <form className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                </label>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write content here' required></textarea>
                </div>
                <div className="add-catgeory-price">
                    <div className="add-catgeory flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Bhiryani">Bhiryani</option>
                            <option value="Burger">Burger</option>
                            <option value="Cake">Cake</option>
                            <option value="Chines">Chines</option>
                            <option value="Dosa">Dosa</option>
                            <option value="Ice cream">Ice cream</option>
                            <option value="North Indian">North Indian</option>
                            <option value="Pizza">Pizza</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20' />
                    </div>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add