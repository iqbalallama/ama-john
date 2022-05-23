import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
                <nav className='menu'>
                    <a href='/home'>Home</a>
                    <a href='/home'>Products</a>
                    <a href='/home'>Services</a>
                    <a href='/home'>Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;