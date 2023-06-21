import React from 'react';
import logo from '../../img/Group.png'
import { FaEnvelope, FaLinkedinIn, FaPhone, FaTencentWeibo, FaTwitter } from 'react-icons/fa';


const Fotter = () => {
    return (
        <div className='   bg-[#0F0F0F] '>
            <div className=''>
                <div className=' text-[#B4B4B4]   w-9/12 mx-auto'>
                    <div className=' lg:flex justify-between pt-20'>
                        <div>
                            <h1 className=' font-bold text-3xl text-white'>Subscribe Our Newsletter</h1>
                            <p className=' w-80 font-normal text-lg'>Enter your details to get business inspiration, trending solutions, and consulting tips delivered to your inbox</p>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">

                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Enter your email" className="input input-bordered" />
                                    <span className=' bg-[#495AF0] text-white'>Subscribe</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <footer className="footer p-10 text-[#B4B4B4]  w-10/12 mx-auto">

                    <div>
                        <div className=' flex gap-2'>
                            <img src={logo} alt="" />
                            <div>
                                <p className=' font-bold text-3xl text-white'>Creative</p>
                                <p>Peoples Design</p>
                            </div>

                        </div>
                        <div>
                            <p className=' w-64 font-normal text-lg'>Business consultants provide management consulting to help businesses and organizations improve performance .</p>
                            <div className='flex items-center mt-4 space-x-5'>
                                <FaTwitter className=' text-4xl text-white bg-transparent p-2 border border-white rounded-full'></FaTwitter>

                                <FaTencentWeibo className=' text-4xl  text-white bg-transparent p-2 border border-white rounded-full'></FaTencentWeibo>
                                <FaLinkedinIn className=' text-4xl text-white bg-transparent p-2 border border-white rounded-full'></FaLinkedinIn>
                               

                            </div>
                        </div>


                    </div>
                    <div>
                        <span className="font-semibold text-2xl  text-white">Company</span>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">FAQ’s</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">Latest Posts</a>
                    </div>
                    <div>
                        <span className=" font-semibold text-2xl  text-white">Our Services</span>
                        <a className="link link-hover">Business planning</a>
                        <a className="link link-hover">Tax strategy</a>
                        <a className="link link-hover">Financial advices</a>
                        <a className="link link-hover">Insurance strategy</a>
                        <a className="link link-hover">Manage investment</a>

                    </div>
                    <div>
                        <span className="font-semibold text-2xl  text-white">Contact Info.</span>
                        <a className="link link-hover">(303) 555-0105</a>
                        <a className="link link-hover">(303) 555-0105</a>
                        <a className="link link-hover">sara.cruz@example.com</a>
                        <a className="link link-hover">3517 W. Gray St. Utica, <br /> Pennsylvania 57867</a>


                    </div>
                </footer>
                <div className=' pb-12'>
                    <div className=' text-white  w-9/12 mx-auto  bg-[#7A7A7A]'>
                        <div className=' p-4 flex justify-between'>
                            <h1>© 2022 CreativePeoples. All Rights Reserved</h1>
                            <p>Privacy Policy     Cookie Policy</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;