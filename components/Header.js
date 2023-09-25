"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react'; 
import { BiMenu } from "react-icons/bi";
import style from '../styles/header.css';
import styles from '../styles/offcanvas.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from '../public/assets/img/logo/grapxstudio.png'

const Header = () => {  

    const [visible, setVisible] = useState(false);

    return (
        <> 
         <header className='header-area py-7 border-b-2 border-[#555151] relative sec-border-sm'>
            <div className='container'>
               <div className='flex justify-between'>
                    <div className='header_logo'>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo" 
                        />
                     </Link>
                        
                    </div>
                    <div className='header__menu flex justify-between items-center md:gap-10'>
                        <ul className='flex justify-center gap-3 text-white sm-none'> 
                            <li><Link href="#about">About</Link> </li>
                            <li><Link href="#service">Service</Link> </li>
                            <li><Link href="#skill">Skills</Link> </li>
                            <li><Link href="#portfollio">Portfollio</Link> </li>
                            <li><Link href="#contact">Contact</Link> </li> 
                        </ul> 
                        <span onClick={() => setVisible(true)} className='text-white text-3xl cursor-pointer'><BiMenu></BiMenu></span>
                    </div> 
               </div> 
            </div>           
        </header>
        <div> 
        </div>
        {visible && <div className='offcanvas'> 
            <span onClick={() => setVisible(false)} className='offcanvas-close cursor-pointer'>x</span>
            <div className="offcanvas-wrapper">
                <div className='mobile-logo'>
                <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo" 
                        />
                     </Link>
                </div>
                <div>
                    <ul className='text-white text-left py-10'> 
                        <li><Link href="#about">About</Link> </li>
                        <li><Link href="#service">Service</Link> </li>
                        <li><Link href="#skill">Skills</Link> </li>
                        <li><Link href="#portfollio">Portfollio</Link> </li>
                        <li><Link href="#contact">Contact</Link> </li> 
                    </ul> 
                </div>
                <div className='offcanvas-social pt-40'>
                    <h3 className='text-white pb-5 font-medium text-2xl'>Follow Me</h3>
                    <ul className='flex gap-4 text-white-100 justify-center'>
                        <li><a href="https://www.facebook.com/profile.php?id=100017254625005" target='_blank'><FaFacebook /></a></li>
                        <li><a href="https://twitter.com/HRHalim2" target='_blank'><FaTwitter /></a></li>
                        <li><a href="https://www.linkedin.com/in/hr-halim/" target='_blank'><FaLinkedin /></a></li>
                        <li><a href="https://github.com/hrhalim" target='_blank'><FaGithub /></a></li> 
                    </ul> 
                 </div> 
            </div> 
        </div>}
          

        </> 
        
    );
};

export default Header;