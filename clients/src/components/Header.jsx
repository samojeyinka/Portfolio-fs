import React, { useEffect, useState, useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import {BiArrowToBottom, BiX} from 'react-icons/bi'
import '../assets/stylesheets/Header.css'


const Header = () => {
    const { theme, toggleTheme} = useTheme();

    const showMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "inherit";
        const blur = document.getElementById("blur");
        blur.style.display = "inherit";
    }


    const hideMenu = () => {
        const menu = document.getElementById("menuBox");
        menu.style.display = "none";
        const blur = document.getElementById("blur");
        blur.style.display = "none";
    }

    return (
        <header className={`${theme}`}>
        <nav className="navbar">
            <div className="blur" id="blur"></div>
            <ul className="menu-links" id="menuBox">
                <i className="">
                    <BiX size={30} className='close-icon' onClick={hideMenu}/>
                </i>

                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/articles'}>Articles</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>

            <div className="menu-btn" onClick={showMenu}>
                <li>Menu</li>
                <BiArrowToBottom />
            </div>

            <div className="theme-switch" onClick={toggleTheme}>
                {theme === 'dark-theme' ? (
                <BiSun size={25} className='icon'/>)
                : (<BiMoon size={25} className='icon'/>)
}
            </div>
        </nav>
        </header>
    );
}

export default Header;
