import React from 'react';
import frigidairesLogo from '../Images/frigidaires_logo.png';
import carrito from '../Images/carrito.png';
import '../css/navbar.css';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';


const Navbar = () => (
  <nav className='nav'>
    <div className='logo-frigidaires'>
      <img 
      className='logo-frigidaires-logo'
      src={frigidairesLogo}
      alt='Logo de FrigidAires'
      /> 
      <p className='logo-frigidaires-texto'>FrigidAires</p>
    </div>
    <React.Fragment> 
    <ul className='navbar-menu'>
      <li>
        <NavLink to='/Home' className='nave-item nav-link' >Home</NavLink>
      </li>
      <li>
        <NavLink to='/Comerciales' className='nave-item nav-link' >Comerciales</NavLink>
      </li>
      <li>
        <NavLink to='/Exhibidoras' className='nave-item nav-link' >Exhibidoras</NavLink>
      </li>
      <li>
        <NavLink to='/Freezers' className='nave-item nav-link' >Freezers</NavLink>
      </li>
    </ul>
    </React.Fragment>
    <div className='carrito-compras'>
        <img
        className='carrito-compras-img'
        src={carrito}
        alt='Imagen de carrito de compras' />
        <p className='carrito-compras-num'>5</p>
    </div>
  </nav>
);

export default Navbar;