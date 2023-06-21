import React from 'react';
import Sectiontile from '../../../Componet/Sectiontile';
import im1 from '../../../img/Image (6).png'
import im2 from '../../../img/Element.png'



import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation


// Radial separators
import ChangingProgressProvider from '../../../Hooktitle/ChangingProgressProvider';
import { FaArrowRight } from 'react-icons/fa';

const percentage = 66;

const Features = () => {

    return (
        <div className=' mb-28 '>
            <div className=' grid lg:grid-cols-2 gap-x-32 w-9/12 mx-auto mt-64'>
                <div className=' space-y-8'>
                    <Sectiontile
                        sectoinHeading={'features'}
                        sectionTitle={'Solve your business problems with our experts'}
                    >
                    </Sectiontile>
                    <div className="collapse collapse-plus bg-base-200 ">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-2xl text-white bg-[#0F0F0F]">
                            Building the  idea of future
                        </div>
                        <div className="collapse-content">
                            <p className=' text-[#5B5F77]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl  text-white bg-[#0F0F0F]">
                            Accurate and friendly support
                        </div>
                        <div className="collapse-content">
                            <p className=' text-[#5B5F77]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl  text-white bg-[#0F0F0F]">
                            Investing in Digital Company
                        </div>
                        <div className="collapse-content">
                            <p className=' text-[#5B5F77]'>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                    </div>
                    <button className=' border bg-[#495AF0] text-white  py-2 px-4 mt-8'>Discover more</button>
                </div>
                <div>
                    <div className='text-[#404040]'>
                        <p>Business consultants provide management consulting to help businesses and organizations improve performance and efficienc</p>
                    </div>

                    <div className='  '>

                        <div className='z-10 relative '>
                            <img className='   ' src={im1} alt="" />
                        </div>

                        <div className=' -mt-32 flex flex-col  items-end'>

                            <img className='  ' src={im2} alt="" />
                        </div>



                    </div>

                    <div className="card bg-base-100  lg:w-96 w-72  shadow-xl relative -mt-64  z-20 lg:-ml-20">

                        <div className="card-body ">
                            <h2 className="card-title">Our Project Success</h2>
                            <p className=' text-[#474747]'>Work with CP consultants to plan for the future of your business</p>
                            <button className=' text-[#FD9C06] inline-flex items-center gap-3'> Read more <FaArrowRight></FaArrowRight></button>
                            <div className="card-actions justify-end ">


                                <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                                    {percentage => (
                                        <CircularProgressbar className=' h-28' value={percentage} text={`${percentage}%`} />
                                    )}
                                </ChangingProgressProvider>
                            </div>
                        </div>


                    </div>




                </div>
            </div>

        </div>
    );
};

export default Features;