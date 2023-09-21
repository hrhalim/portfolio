import style from '../styles/footer.css'
import { FaArrowRight} from "react-icons/fa"; 
const Footer = () => {
    return (
        <footer className="relative sec-border-2 pt-7" id='contact'>
            <div className="container">
                <div className="relative z-10">
                    <div className='text-white text-center py-11 md:py-32'>
                        <span className='contact-small'>CONTACT ME</span>
                        <h2 className='text-4xl md:text-9xl pb-8'> Let's Work</h2>  
                        <div className="grid md:grid-cols-2 gap-5 items-center lg:w-3/5 m-auto">
                            <a className='btn-mail' href="mailto:jshalim24@gmail.com">jshalim24@gmail.com<FaArrowRight></FaArrowRight></a>
                            <a className='btn-mail' href="tel:">+8801777308624<FaArrowRight></FaArrowRight></a>
                        </div> 
                    </div> 
                </div>
            </div>  
            <div className='text-center py-7 border-t border-[#555151]'>
                <p>Copyright © 2023. All rights reserved. Designed by Halim.</p>
            </div>
        </footer>
    );
};

export default Footer;