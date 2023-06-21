import React from 'react';
import im1 from '../../../img/Image (1).png'

import im3 from '../../../img/Image-2.png'
import im4 from '../../../img/Image-3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaBeer, FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaHouzz, FaRegEnvelope } from 'react-icons/fa';



const OurTeam = () => {
    return (
        <div className=' mb-20'>
            <section className=' text-center mb-14'>
                <p className=' text-[#EB5757] font-semibold text-xl '>Our Team</p>
                <h1 className=' text-5xl font-bold'>Meet with Expert</h1>
            </section>
            <section>

                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className='relative shadow-2xl'>
                                <div>
                                    <img src={im1} alt="" srcset="" />
                                </div>
                                <div className=' bg-slate-50 px-4 py-3 hover:opacity-100 opacity-0 absolute inset-x-0 bottom-0 h-20'>
                                    <div className=' flex justify-between'>
                                        <div>
                                        <h1 className=' text-2xl font-bold'>Jenny Wilson</h1>
                                        <p className=' text-[#0F0F0F]'>St. Celina, Delaware</p>

                                        </div>
                                        <div className='flex items-center mt-4 space-x-5'>
                                            <FaFacebookF className=' text-4xl text-white bg-emerald-300 p-2 border border-white rounded-full'></FaFacebookF>

                                            <FaTwitter className=' text-4xl  text-white bg-primary p-2 border border-white rounded-full'></FaTwitter>
                                            <FaPhone className=' text-4xl text-white bg-red-600 p-2 border border-white rounded-full'></FaPhone>
                                            

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='relative shadow-2xl'>
                                <div>
                                    <img src={im1} alt="" srcset="" />
                                </div>
                                <div className='  bg-slate-50 px-4 py-3  hover:opacity-100 opacity-0 absolute inset-x-0 bottom-0 h-20'>
                                    <div className=' flex justify-between'>
                                        <div>
                                        <h1 className=' text-2xl font-bold'>Jenny Wilson</h1>
                                        <p className=' text-[#0F0F0F]'>St. Celina, Delaware</p>

                                        </div>
                                        <div className='flex items-center mt-4 space-x-5'>
                                            <FaFacebookF className=' text-4xl text-white bg-emerald-300 p-2 border border-white rounded-full'></FaFacebookF>

                                            <FaTwitter className=' text-4xl  text-white bg-primary p-2 border border-white rounded-full'></FaTwitter>
                                            <FaPhone className=' text-4xl text-white bg-red-600 p-2 border border-white rounded-full'></FaPhone>
                                            

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='relative shadow-2xl'>
                                <div>
                                    <img src={im3} alt="" srcset="" />
                                </div>
                                <div className=' bg-slate-50 px-4 py-3 hover:opacity-100 opacity-0 absolute inset-x-0 bottom-0 h-20'>
                                    <div className=' flex justify-between'>
                                        <div>
                                        <h1 className=' text-2xl font-bold'>Jenny Wilson</h1>
                                        <p className=' text-[#0F0F0F]'>St. Celina, Delaware</p>

                                        </div>
                                        <div className='flex items-center mt-4 space-x-5'>
                                            <FaFacebookF className=' text-4xl text-white bg-emerald-300 p-2 border border-white rounded-full'></FaFacebookF>

                                            <FaTwitter className=' text-4xl  text-white bg-primary p-2 border border-white rounded-full'></FaTwitter>
                                            <FaPhone className=' text-4xl text-white bg-red-600 p-2 border border-white rounded-full'></FaPhone>
                                            

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </>
            </section>
        </div>
    );
};

export default OurTeam;