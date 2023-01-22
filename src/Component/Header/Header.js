import React from 'react';
import logo from "../../img/logo.png"
import"./Header.css"
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <a href="/shop">Shops</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;