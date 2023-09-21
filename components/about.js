import style from '../styles/about.css'

const About = () => {
    return (
        <section className='about-area sec-before relative py-11 md:py-28  bg-[#131313]' id='about'>
        <div className="container">
           <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='pb-10'>
                    <h2 className='text-5xl lg:text-7xl text-white font-semibold pb-4'>About Me</h2>
                    <p className='about-text pb-6'>
                    I am a seasoned web designer and developer, boasting three years of  experience in web design, Webflow development, and React Next development. My expertise lies in crafting visually appealing designs, implementing complex interactions, and ensuring seamless user experiences. Proficient in translating designs into interactive and responsive websites</p>
                    <p className='about-text'>
                    I excel in utilizing Webflow and React Next to build dynamic and feature-rich applications. My dedication to staying updated with the latest industry trends fuels my passion for creating innovative and impactful web solutions. I look forward to leveraging my skills to drive excellence in web design and development.</p>
                    <div className='grid md:grid-cols-2 gap-5 md:gap-10 pt-10'>
                        <h3 className='text-white text-3xl font-medium'>Project <br /> Complete <br /> <span className=' text-5xl lg:text-9xl pt-10 block'>150+</span></h3>
                        <h4 className='text-white text-3xl font-medium text-right'>Years of <br /> Expreance <br /> <span className='text-5xl lg:text-9xl pt-10 block'>3+</span></h4>  
                    </div> 
                </div> 
                <div className='about-img'>
                    <img src="../assets/img/thumb/halim.png" alt="Halim" /> 
                </div>
           </div>
             
        </div> 
   </section>
    );
};

export default About;