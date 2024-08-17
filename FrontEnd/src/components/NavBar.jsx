import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () =>{
    return(<div className='bg-white ht-60 d-flex flex-row justify-content-between'>
        <div >
            <div className='menueIconDiv'>Navbar</div>
            <div className='logoDiv'></div>
        </div>
        
    </div>)
    
}

export default NavBar;