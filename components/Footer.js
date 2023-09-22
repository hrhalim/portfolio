import style from '../styles/footer.css'
import { FaArrowRight, FaDiaspora, FaRegSnowflake} from "react-icons/fa"; 
const Footer = () => {
    return (
        <footer className="relative sec-border-2 pt-7" id='contact'>
            <div className="container">
                <div className="relative z-10">
                    <div className='text-white text-center py-20 md:py-32'>
                        <span className='contact-small' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">CONTACT ME</span>
                        <h2 className='text-4xl md:text-9xl pb-8' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> Let's Work</h2>  
                        <div className="grid md:grid-cols-2 gap-5 items-center lg:w-3/5 m-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <a className='btn-mail' href="mailto:jshalim24@gmail.com">jshalim24@gmail.com<FaArrowRight></FaArrowRight></a>
                            <a className='btn-mail' href="tel:">+8801777308624<FaArrowRight></FaArrowRight></a>
                        </div> 
                    </div> 
                    <div className='footer-icon' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <span className='rotate'>
                            <FaDiaspora className='text-white text-5xl lg:text-7xl'></FaDiaspora>
                        </span>
                    </div>
                    <span className='footer-icon-left' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <FaRegSnowflake className='text-white text-5xl lg:text-7xl'></FaRegSnowflake>
                    </span>
                </div>
            </div>  
            <div className='text-center py-7 border-t border-[#555151]'>
                <p>Copyright © 2023. All rights reserved. Designed by Halim.</p>
            </div>
        </footer>
    );
};

export default Footer;