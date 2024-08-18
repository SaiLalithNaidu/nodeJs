import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../../assets/assets';
import '../Navbar/Navbar.css'
import { AuthContext } from '../../context/AuthContext';


const NavBar = () =>{
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login"); // Redirect to login page after logout
      };
      
      const [menu,setMenu] = useState("menu");

    return(<div className='bg-white'>
        <div className='d-flex justify-content-between'>
            <div className='menueIconDiv d-flex justify-content-between'>
                <img className='logoImg' src={assets.logo} alt='logo'/>
            </div>
            <ul className='navBar-menu m-0 p-0 d-flex justify-content-between flex-row align-items-center gap-4'>
                    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                    <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                    <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
                    <li onClick={()=>setMenu("conatactus")} className={menu==="conatactus"?"active":""}>Contact us</li>
                </ul>
            <div className='navbar-right d-flex justify-content-between align-items-center gap-5'>
                <img className="ht-20" src={assets.search_icon} alt='searcIcon'/>
                    <img className="ht-20" src={assets.basket_icon} alt='basket'/>
                    <button onClick={handleLogout}>Logout</button>
                    <div className="dot"></div>
            </div>
        </div>
        
    </div>)
    
}

export default NavBar;