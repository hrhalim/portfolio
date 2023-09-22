import React from 'react';

import { FaReact, FaBuffer, FaWeebly } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

const Service = () => {
    return (
        <section className='service-area py-11 md:py-28 relative border-t-2 border-b-2 border-[#555151]' id='service'>
             <div className="container">
             <span className='small-text' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Services</span>
                <div className='pb-7 lg:w-2/3 text-center m-auto block'>
                    <h2 className='text-5xl lg:text-7xl text-white font-semibold pb-4' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">My Services</h2>
                   <div className='grid md:grid-cols-2 gap-5'> 
                            <div className='flex items-centr justify-end'>
                                <div className='line-border' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                            </div> 
                        <div>
                            <p className='content-box-right' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">My services encompass web design and development, constructing dynamic and efficient. I design visually appealing and responsive websites. In the realm of web design I deliver high-quality, aesthetically pleasing, and functional web solutions.</p>
                        </div>
                   </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='border-2 border-[#555151] p-5 transition-all hover:bg-[#ffbf00]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                        <AiFillHtml5 className='text-white text-3xl'></AiFillHtml5>
                        <h2 className='text-white text-3xl font-semibold py-4'>Frontend</h2>
                        <p className='hover:text-white'>We specialize in creating visually appealing and interactive user interfaces, ensuring seamless experiences through the use of latest technologies and best practices.</p> 
                    </div>
                    <div className='border-2 border-[#555151] p-5 transition-all hover:bg-[#ffbf00]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <FaBuffer className='text-white text-3xl'></FaBuffer>
                        <h2 className='text-white text-3xl font-semibold py-4'>Web Design</h2>
                        <p className='hover:text-white'>Our designs blend aesthetics with functionality, focusing on user-centricity to enhance engagement and create a compelling online presence.</p> 
                    </div>
                    <div className='border-2 border-[#555151] p-5 transition-all hover:bg-[#ffbf00]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
                        <FaWeebly className='text-white text-3xl'></FaWeebly>
                        <h2 className='text-white text-3xl font-semibold py-4'>Webflow</h2>
                        <p className='hover:text-white'>Utilizing Webflow's capabilities, we craft responsive and customizable websites, providing a visually stunning and high-performing online platform.</p> 
                    </div>
                    <div className='border-2 border-[#555151] p-5 transition-all hover:bg-[#ffbf00]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3500">
                        <FaReact className='text-white text-3xl'></FaReact>
                        <h2 className='text-white text-3xl font-semibold py-4'>React Next JS</h2>
                        <p className='hover:text-white'>We build dynamic and SEO-friendly web applications using React and Next.js, delivering speed, scalability, and an exceptional user experience.</p> 
                    </div>  
                </div> 
             </div> 
        </section>
    );
};

export default Service;