import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {

    const [menu,setMenu] = useState("Home");


  return (

    <div className='navbar'>

        <div className="nav-logo">
            <img className='img_logo' src={logo} alt="" />
                      
        </div>
        <ul className="nav_menu">
            <li onClick={()=>{setMenu("home")}} >Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("femininos")}}>Feminino{menu==="femininos"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("masculinos")}}>Masculino{menu==="masculinos"?<hr/>:<></>}</li> 
            <li onClick={()=>{setMenu("infantis")}}>Infantil{menu==="infantis"?<hr/>:<></>}</li> 

        </ul>
        <div className="nav-logo-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar