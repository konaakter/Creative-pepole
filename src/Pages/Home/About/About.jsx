import React from 'react';
import img from '../../../img/Image.png'
import CountUp from 'react-countup';
import { FaPlayCircle } from 'react-icons/fa';
import Modal from '../OurClient/Modal';


const About = () => {
    return (
        <div className=' mb-11'>
            <div className=' grid lg:grid-cols-2 gap-8'>
                <div className=' bg-[#FFF5DA]  w-full '>
               

                    <div >

                        
                        <div className='lg:ml-[280px] mt-52'>
                        <div className=' flex gap-6 items-center '>
                            <button > <FaPlayCircle className=' text-5xl'></FaPlayCircle></button>
                       
                        <p>More About CP.</p>
                        </div>
                        <img className='h-64 ' src={img} alt="" />
                        </div>
                       
                    </div>
                </div>
                <div>
                    <div className='  lg:w-[420px] w-80 lg:ms-0 ms-8 '>
                        <div >
                            <div class="flex items-center w-32 ">
                                <hr class="flex-grow border-t-2 border-[#EB5757]" />
                                <span class=" px-2 text-[#EB5757]">About Us</span>

                            </div>
                        </div>

                        <h1 className=' text-[#0F0F0F] font-bold text-5xl'>We are aware for our quality to successful business</h1>
                        <p>Learn how to start
                            your own business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant</p>


                    </div>
                    <button className=' border bg-[#495AF0] text-white lg:ms-0 ms-8  py-2 px-4 mt-8'>Discover more</button>
                    <div className=' grid lg:grid-cols-3 grid-cols-2 gap-x-4 w-72 lg:w-[550px] pt-8  lg:ms-0 ms-7'>
                        <div className=' space-y-2'>
                            <hr />
                            <div className=' flex'>
                            <CountUp className=' text-5xl text-[#FD9C06]' end={2760} duration={7.75}/><p className=' text-5xl text-[#FD9C06]'>+</p>
                            

                            </div>
                            <p className=' text-[#404040] text-lg'>Total Customer</p>
                           
                        </div>
                        <div className=' space-y-2'>
                            <hr />
                            <div className=' flex'>
                            <CountUp className=' text-5xl text-[#FD9C06]' end={35} duration={7.75}/><p className=' text-5xl text-[#FD9C06]'>+</p>
                            

                            </div>
                            <p className=' text-[#404040] text-lg'>Years Experience</p>
                        </div>
                        <div className=' space-y-2'>
                            <hr />
                            <div className=' flex'>
                            <CountUp className=' text-5xl text-[#FD9C06]' end={328} duration={7.75}/><p className=' text-5xl text-[#FD9C06]'>+</p>
                            

                            </div>

                           <p className=' text-[#404040] text-lg'>Team Members</p>

                        </div>
                    </div>


                </div>


            </div>
            
        </div>
    );
};

export default About;
/* h-64 ml-[280px] mt-32*/