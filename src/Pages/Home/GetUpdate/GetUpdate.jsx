import React from 'react';

import im1 from '../../../img/Image (2).png'
import im2 from '../../../img/Image (3).png'
import im3 from '../../../img/Image (4).png'
import { FaArrowRight, FaCommentAlt, FaEye } from 'react-icons/fa';


const GetUpdate = () => {
    return (
        <div className=' w-9/12 mx-auto mb-10'>

            <div class=" text-center">


                <h1 className=' text-[54px] font-bold  '>Regular Get Update </h1>

            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <div className=' space-y-4'>
                    <div className=' bg-white z-10 p-2 absolute mt-8 ml-4'>
                        <h1>02 Dec 2021</h1>
                    </div>
                    <div className=' relative'>
                        <img src={im1} alt="" />
                    </div>

                    <div className=' flex justify-around text-[#858585]'>
                        <p>Consultant</p>

                        <div className=' flex gap-4'>

                            <div className=' flex items-center gap-2'>
                                <FaCommentAlt></FaCommentAlt>
                                <p> 25</p>

                            </div>


                            <div className=' flex items-center gap-2 '>
                                <FaEye></FaEye>
                                <p>32k</p>
                            </div>



                        </div>

                    </div>
                    <hr />
                    <div>
                        <h1 className=' text-[#0F0F0F] text-2xl'>What is a business consultant?</h1>
                        <p>
                            A business consultant is a professional with a wide array of
                            skills who assists business owners </p>
                    </div>
                    <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                </div>
                <div className=' space-y-4'>
                    <div className=' bg-white z-10 p-2 absolute mt-8 ml-4'>
                        <h1>02 Dec 2021</h1>
                    </div>
                    <div className=' relative'>
                        <img src={im1} alt="" />
                    </div>
                    <div className='  flex justify-around text-[#858585]'>
                        <p>Consultant</p>

                        <div className=' flex gap-4'>

                            <div className=' flex items-center gap-2'>
                                <FaCommentAlt></FaCommentAlt>
                                <p> 25</p>

                            </div>


                            <div className=' flex items-center gap-2 '>
                                <FaEye></FaEye>
                                <p>32k</p>
                            </div>



                        </div>

                    </div>
                    <hr />
                    <div>
                        <h1 className=' text-[#0F0F0F] text-2xl'>What is a business consultant?</h1>
                        <p>
                            A business consultant is a professional with a wide array of
                            skills who assists business owners </p>
                    </div>
                    <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                </div>
                <div className=' space-y-4'>
                    <div className=' bg-white z-10 p-2 absolute mt-8 ml-4'>
                        <h1>02 Dec 2021</h1>
                    </div>
                    <div className=' relative'>
                        <img src={im3} alt="" />
                    </div>
                    <div className='  flex justify-around text-[#858585]'>
                        <p>Consultant</p>

                        <div className=' flex gap-4'>

                            <div className=' flex items-center gap-2'>
                                <FaCommentAlt></FaCommentAlt>
                                <p> 25</p>

                            </div>


                            <div className=' flex items-center gap-2 '>
                                <FaEye></FaEye>
                                <p>32k</p>
                            </div>



                        </div>

                    </div>
                    <hr />
                    <div>
                        <h1 className=' text-[#0F0F0F] text-2xl'>What is a business consultant?</h1>
                        <p>
                            A business consultant is a professional with a wide array of
                            skills who assists business owners  </p>
                    </div>
                    <button className=' hover:text-[#495AF0] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>

                </div>


            </div>
        </div>


    );
};

export default GetUpdate;