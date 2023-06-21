import React from 'react';
import im1 from '../../../img/Image (5).png'
import im2 from '../../../img/clienr.png'
import { FaPlayCircle, FaYoutube } from 'react-icons/fa';
import bgelement from '../../../img/BG Elements (1).png'
import Modal from './Modal';


const OurClient = () => {
    return (
        <div className=' '>
            <div className='     '>
                <div >
                    <section className=' pt-12 bg-[#FFF5DA] lg:h-96 h-[500px]' >
                        <div className=' w-9/12 mx-auto'>
                            <div className=' lg:flex justify-between'>
                                <h1 className=' text-[54px] font-bold'>Our Client Says Their <br /> Satisfaction</h1>
                                <div>
                                    <button className=' border bg-[#495AF0] text-white  py-2 px-4 mt-8'>Discover more</button>
                                </div>


                            </div>
                            <div>

                            </div>
                        </div>

                    </section>
                    <section className='  '>
                        <div className=' grid lg:grid-cols-2 bg-white shadow-2xl relative lg:w-9/12 mx-auto w-11/12 -mt-24 lg:-mt-40'>
                            <div>
                                <img className=' h-96 relative' src={im1} alt="" srcset="" />
                                <button onClick={() => window.my_modal_5.showModal()}  className=' absolute  -mt-52  ml-40 border border-[#FD9C06] border-opacity-60 bg-[#FD9C06] bg-opacity-30  rounded-full p-3'><FaPlayCircle className=' text-5xl  text-white bg-[#FD9C06] p-2 border border-[#FD9C06] rounded-full'></FaPlayCircle></button>
                            </div>


                            <div className=' flex flex-col justify-center p-10 space-y-4 text-[#46535A]'>
                                <p className=' text-xl'>Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.</p>
                                <div className=' flex gap-2'>
                                    <img className=' w-16' src={im2} alt="" />
                                    <div>
                                        <p className=' text-[#2C373E] text-2xl font-bold'>Justin L. Garcia</p>
                                        <p>Co-founder</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=' flex flex-col items-end -mt-80 '>
                            <img className=' lg:h-[550px] h-96' src={bgelement} alt="" />
                        </div>

                    </section>
                </div>


            </div>
            <Modal></Modal>
        </div>
    );
};

export default OurClient;


