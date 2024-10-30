import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navigationbar = () => {
    return (
        <nav className='p-3 '>
            <div className='flex items-center justify-between'>
                <img src={logo} className='w-15' alt="Logo" />
                <div className='text-white flex justify-between text-2xl'>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='m-2 transform hover:scale-150 transition-transform duration-300' />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='m-2 transform hover:scale-150 transition-transform duration-300' />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='m-2 transform hover:scale-150 transition-transform duration-300' />
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navigationbar;