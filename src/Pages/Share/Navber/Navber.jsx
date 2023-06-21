import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

import logo from '../../../img/Group.png'
import { FaEnvelope, FaLinkedinIn, FaPhone, FaTencentWeibo, FaTwitter } from 'react-icons/fa';
const Navber = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div>
            <div>
                <div  className=' lg:flex  justify-around bg-black p-5'>
                    <div className=' flex gap-x-3 text-slate-300 '>
                    <FaTwitter className='  hover:text-white text-2xl'></FaTwitter>
                    <FaTencentWeibo className='  hover:text-white text-2xl'></FaTencentWeibo>
                    <FaLinkedinIn className='  hover:text-white text-2xl'></FaLinkedinIn>
                    </div>
                    <div className=' text-white'>
                        <p className=' inline-flex items-center gap-2'><FaEnvelope></FaEnvelope>  info.pix@gmail.com</p>
                        <p className=' inline-flex items-center gap-2'> <FaPhone></FaPhone> (209) 555-0104</p>
                    </div>
                </div>
            </div>
        <div className=' w-9/12 mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link > <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuItemClick(0)}>
                                Home</li> </Link>
                            <Link > <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuItemClick(1)}>
                                About Us</li></Link>
                            <Link ><li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuItemClick(2)}>
                                Services</li></Link>
                            <Link > <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuItemClick(3)}>
                                Pricing</li></Link>
                            <Link > <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleMenuItemClick(4)}>
                                Blog</li></Link>
                            <Link > <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleMenuItemClick(5)}>
                                Contact</li></Link>
                            <Link to='/todos' > <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleMenuItemClick(6)}>
                                todos</li></Link>
                            <button className=' border border-black py-2 px-4'> Free Consultation</button>
                        </ul>
                    </div>
                    <div className=' flex items-center'>
                        <img src={logo} alt="" />
                        <div>
                            <h1 className=' text-3xl'>Creative</h1>
                            <p className=' text-sm text-[#404040]'>Peoples Design</p>
                        </div>

                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <Link > <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuItemClick(0)}>
                            Home</li> </Link>
                        <Link > <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuItemClick(1)}>
                            About Us</li></Link>
                        <Link ><li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuItemClick(2)}>
                            Services</li></Link>
                        <Link > <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuItemClick(3)}>
                            Pricing</li></Link>
                        <Link > <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleMenuItemClick(4)}>
                            Blog</li></Link>
                        <Link > <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleMenuItemClick(5)}>
                            Contact</li></Link>
                        <Link to='/todos' > <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleMenuItemClick(6)}>
                            Todos</li></Link>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <button className=' border border-black py-2 px-4'> Free Consultation</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navber;