import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.css'
import CustomLink from './../CoustomLink/CoustomLink';
const Header = () => {
    return (
        <div className='header-Link'>
            
          
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to ="/about">About</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <div>
            
            </div>
        </div>
        
    );
};

export default Header;