import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../icons/cc-logo.png';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <NavLink to={'/'}>
        <a className="navbar__logo">
            <img src={logo} alt="charityChain-Logo" className='navbar__logo-img'/>
            <span>CharityChain</span>
        </a>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar__search">
                <span><i className="fa fa-magnifying-glass"></i></span>
                <input type="search" className='navbar__search-input' placeholder='Search CharityChain' />
            </div>
            <div className="navbar__list">
                <div>
                    <a onClick={()=>{
                        window.scrollTo(0, document.body.scrollHeight);
                    }}><i className="fa fa-circle-question"></i></a>
                    <NavLink to={'/login'}><a><i className="fa fa-user"></i></a></NavLink>
                    <NavLink to={'wallet'}><a><i className="fa fa-wallet"></i></a></NavLink>
                    <NavLink to={'/cart'}><a><i className="fa fa-cart-shopping"></i></a></NavLink>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
