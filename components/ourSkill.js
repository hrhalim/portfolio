"use client" 
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 

const OurSkill = () => {
    return (
        <section className='skills-area py-11 relative md:py-28 border-t-2 border-[#555151]' id='skill'> 
            <div className="container">
            <span className='small-text'data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Skills</span>
            <div className='pb-7 lg:w-2/3 text-center m-auto block pl-3'>  
                        <h2 className='text-5xl lg:text-7xl text-white font-semibold pb-4' data-aos="zoom-in-up">Our Skills</h2>
                    <div className='grid md:grid-cols-2 gap-5'> 
                            <div>
                                <p className='content-box-left' data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">My web design skills emphasize engaging layouts and intuitive user interfaces that align with clients' brand identities. <br /> I deliver high-quality, aesthetically pleasing, and functional web solutions.</p>
                            </div>
                                <div className='flex items-centr justify-start'>
                                    <div className='line-border' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                                </div>  
                    </div>
                    </div>  
            </div>

          <div className='pt-10' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <Swiper
                // install Swiper modules 
                spaceBetween={30}
                slidesPerView={6} 
                loop={true} 
                speed={1500}
                autoplay={{ 
                    "disableOnInteraction": false
                }}
                breakpoints={{ 
                    375: { 
                      slidesPerView: 2,
                    }, 
                    768: {
                      width: 768,
                      slidesPerView: 3,
                    },
                  }}
                
                >
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>Html CSS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>Bootstrap</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>Tailwind CSS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>WordPress</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                      <h3 className='text-white text-2xl font-medium'>Webflow</h3>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>React JS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>Next JS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="skill-slide border border-[#555151] p-5 flex items-center justify-center">
                        <h3 className='text-white text-2xl font-medium'>JavaScript</h3>
                    </div>
                </SwiperSlide> 
            </Swiper> 
         </div> 
   </section>  
    );
};

export default OurSkill;