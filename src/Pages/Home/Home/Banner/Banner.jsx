import React from 'react';
import men from '../../../../img/_Portrait Image.png'
import bg from '../../../../img/Rectangle 16.png'
import loggo from '../../../../img/Group 1000006985.png'
import im1 from '../../../../img/Ellipse 1025.png'
import im2 from '../../../../img/Ellipse 1026.png'
import im3 from '../../../../img/Ellipse 1027.png'
import im4 from '../../../../img/Ellipse 1028.png'
import bgelement from '../../../../img/Group (1).png'
import chart from '../../../../img/Group 1000007003 (1).png'


import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'







const Banner = () => {
    return (
        <div className='   bg-[#F4F9FF] '>
            <div className=' w-9/12 mx-auto lg:flex lg:flex-row gap-9 py-16'>


                <div className='home'>

                    <div className=' '>
                        <h1 className=' text-[60px] font-bold text-[#FD9C06]'>
                            Hire consultant <br /> <span className=' text-[#0F0F0F]'>
                                for boost your business
                            </span>
                        </h1>
                        <p className=' text-[#404040] w-80'>
                            Consultancy firm established by professionals with the intention to identify and unlock potential avenues for innovative ideas
                        </p>
                        <button className=' border bg-[#495AF0] text-white  py-2 px-4 mt-8'>Discover more</button>
                        <div className=' flex items-center gap-3'>
                            <div className=' flex mt-6'>
                                <div className='  '>
                                    <img className=' ' src={im1} alt="" />
                                </div>
                                <div className=' -ml-5'>
                                    <img className='  ' src={im2} alt="" />

                                </div>
                                <div className=' -ml-5'>
                                    <img src={im3} alt="" />

                                </div>
                                <div className=' -ml-5'>
                                    <img src={im4} alt="" />

                                </div>


                            </div>
                            <div>
                                <div className=' flex items-center '>
                                    <p className=' text-2xl text-[#FD9C06] '>4.9 |</p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={3}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <h1 className=' text-[#404040]'>325k Total Review</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' lg:mt-0 mt-24 flex flex-col justify-center items-center '>

                    <div className=' relative border-4 border-[#FD9C06] p-44 mt-20'>

                        <div className=' absolute inset-0 -mt-[66px] '>
                            <img className=' w-full h-[400]' src={bg} alt="" />
                            <img className=' -mt-[450px] h-[450px] ' src={men} alt="" />
                            <div className=' relative lg:flex items-center gap-4 hidden py-4 bg-white w-40 ps-2 
                              rounded  -mt-[350px] ml-72 '>
                                <img className='  h-10' src={loggo} alt="" />
                                <div>
                                    <p>200k</p>
                                    <h1>Project Done</h1>

                                </div>
                               
                            </div>

                           
                        </div>
                    </div>
                    <div className=' -mt-24 relative lg:-ml-52'>
                                    <img src={chart} alt="" srcset="" />
                                </div>





                </div>



            </div>



        </div>
    );
};

export default Banner;


