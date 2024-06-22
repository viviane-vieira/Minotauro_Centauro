import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("Home");


  return (

    <div className='navbar'>

        <div className="nav-logo">
            <img className='img_logo' src={logo} alt="" />
                      
        </div>
        <ul className="nav_menu">
            <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("femininos")}}><Link to='/femininos'>Feminino</Link>{menu==="femininos"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("masculinos")}}><Link to='/masculinos'>Masculino</Link>{menu==="masculinos"?<hr/>:<></>}</li> 
            <li onClick={()=>{setMenu("infantis")}}><Link to='/infantis'>Infantil</Link>{menu==="infantis"?<hr/>:<></>}</li> 
            <li onClick={()=>{setMenu("quem somos")}}><Link to='/quem somos'>Quem Somos</Link>{menu==="quem somos"?<hr/>:<></>}</li>

        </ul>
        <div className="nav-logo-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar