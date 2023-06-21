import React from 'react';
import Sectiontile from '../../Componet/Sectiontile';
import { FaArrowRight } from 'react-icons/fa';
import bgelement from '../../img/BG Elements (2).png'
import img1 from '../../img/Icon (4).png'

import img2 from '../../img/Icon (5).png'

import img3 from '../../img/Icon (6).png'

import img4 from '../../img/Icon (7).png'
import CountUp from 'react-countup';



const OurServices = () => {
    return (
        <div>
            <div className=' grid grid-cols-2 '>
                <div className='  w-8/12 mx-auto'>
                    <div className=' grid lg:grid-cols-2  '>
                        <div className=' mt-16 w-64  '>
                            <Sectiontile
                                sectoinHeading={'Our Services'}
                                sectionTitle={'Providing all Console Solution'}
                                sectionDescreption={'Business consultants provide management consulting to help businesses organizations improve performance and efficienc'}
                            >
                            </Sectiontile>

                            <div className="flex flex-col w-full lg:flex-row lg:mt-16 mt-3">
                                <div className="grid flex-grow h-20 card place-items-center">



                                    <div className=' flex'>
                                        <CountUp className=' text-5xl text-[#FD9C06]' end={90} duration={9.75}/><p className=' text-5xl text-[#FD9C06]'>%</p>


                                    </div>

                                    <p className=' text-[#404040] text-lg'>Satisfaction rate</p>


                                </div>
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="grid flex-grow h-20 card  place-items-center">
                                    <div className=' flex'>
                                        <CountUp className=' text-5xl text-[#FD9C06]' end={35} duration={9.75}/><p className=' text-5xl text-[#FD9C06]'>M</p>


                                    </div>

                                    <p className=' text-[#404040] text-lg'>Registered users</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className=' grid lg:grid-cols-2 lg:gap-x-[400px] gap-10 pt-12 lg:mr-0   relative lg:ml-20   -ml-7'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <img className=' w-20 ' src={img1} alt="" />
                                        <h2 className="card-title">Business Analysis</h2>
                                        <p>Business analysis is a professional discipline of identifying business needs determining</p>
                                        <div className="card-actions ">
                                            <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                                        </div>

                                    </div>

                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <img className=' w-20 ' src={img2} alt="" />


                                        <h2 className="card-title">Business Analysis</h2>
                                        <p>Business analysis is a professional discipline of identifying business needs determining</p>
                                        <div className="card-actions ">
                                            <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                                        </div>
                                    </div>

                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <img className=' w-20 ' src={img3} alt="" />

                                        <h2 className="card-title">Business Analysis</h2>
                                        <p>Business analysis is a professional discipline of identifying business needs determining</p>
                                        <div className="card-actions ">
                                            <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                                        </div>
                                    </div>

                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <img className=' w-20 ' src={img4} alt="" />

                                        <h2 className="card-title">Business Analysis</h2>
                                        <p>Business analysis is a professional discipline of identifying business needs determining</p>
                                        <div className="card-actions ">
                                            <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F4F9FF] lg:h-[550px] h-[800px] lg:mt-0 mt-80 '>

                </div>

            </div>
            <img className=' -mt-80 h-96 lg:h-[550px]' src={bgelement} alt="" />

        </div>
    );
};

export default OurServices;

