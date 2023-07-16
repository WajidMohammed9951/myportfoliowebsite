import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo Image' style={{ width: '90px' }} />
            </div>
            <div >
                <ul className=' hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars />  : <FaTimes />}
            </div>
            <ul className= {!nav ? 'hidden' :'absolute top-16 left-0 w-full h-[70vh] bg-[#0a192f] flex flex-col justify-center  items-center'}>

                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar