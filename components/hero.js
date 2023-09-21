"use client";

import style from '../styles/hero.css'
import Image from 'next/image'
import hireMe from '../public/assets/img/logo/hireme.png'
import myPhoto from '../public/assets/img/thumb/halim.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowRight, FaArrowDown } from "react-icons/fa";
import Typed from "react-typed"

const Hero = () => {
    return (
        <section className='hero__area py-12 md:py-40 lg:h-screen'>
            <div className='container'>
                <div className='hero__wrapper'> 
                    <div>
                        <h1 className='text-white text-2xl md:text-4xl'>HI 🖐 I’M HALIM</h1>
                        <h2 className='text-white text-7xl lg:text-8xl py-7 font-bold mb-5'>I am a <br /> <span className='hero__text-left block'>Web</span>
                        <Typed
                            strings={[
                                "Designer",
                                "Developer"
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        /> 
                         
                         </h2>
                        <a className='btn-primary' href="#about">About Me <span className='flex items-center pl-4'><FaArrowRight /></span>
                        </a> 
                        </div>
                    <div className='hero__img'>
                        <Image
                            src={myPhoto}
                            alt="Hire Me"
                            width="350px"
                            height="300px"
                        />  
                    </div>
                    <div className='hero__content relative'>
                            <div className='hero__hireme'>
                                <div className='rotate'>
                                <a href="mailto:jshalim24@gmail.com"> 
                                        <Image
                                            src={hireMe}
                                            alt="Hire Me"
                                            width="350px"
                                            height="300px"
                                        />      
                                </a>  
                                </div>  
                                <span className='cursor-pointer'><FaArrowDown /></span>
                            </div>

                        <p>With a passion for both aesthetics and functionality, I excel in <strong className='text-white'>web design</strong> and <strong className='text-white'>development</strong>. Crafting engaging designs and seamless, user-friendly websites is my expertise and dedication.</p>
                    </div> 
                </div> 
            </div>
            <div className="hero__btm-wrapper"> 
                    <div className='hero__btm md:flex justify-between gap-4'> 
                        <div>
                            <h3 className='text-white pb-5 font-medium text-2xl'>Follow Me</h3>
                            <ul className='flex gap-4 text-white-100'>
                                <li><a href="https://www.facebook.com/profile.php?id=100017254625005" target='_blank'><FaFacebook /></a></li>
                                <li><a href="https://twitter.com/HRHalim2" target='_blank'><FaTwitter /></a></li>
                                <li><a href="https://www.linkedin.com/in/hr-halim/" target='_blank'><FaLinkedin /></a></li>
                                <li><a href="https://github.com/hrhalim" target='_blank'><FaGithub /></a></li> 
                            </ul> 
                        </div>
                        <div>
                         <a className='btn-primary' href="https://drive.google.com/file/d/1GbysQM-eumaexvldZa1ocv6wPbEwOeqt/view?usp=drive_link" target='_blank'>Veiw CV</a>
                        </div>
                    </div>
                </div>
            <div className='hero__arrow-icon move'> 
                      <FaArrowDown /> 
            </div>
        </section>
    );
};

export default Hero;