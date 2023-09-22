"use client"
import { useEffect, useState } from 'react';
import style from '../styles/project.css'; 
import Link from 'next/link';
// import Image from 'next/image'
const Projects = () => {

    const [projects, setProject] = useState(null)
    const [isLoading, setLoading] = useState(true) 

        useEffect(() => {
            fetch('project.json')
            .then(res => res.json()) 
            .then((data) => {
                setProject(data)
                setLoading(false)
            })
        }, []) 

        if (isLoading) return <p>Loading...</p>
        if (!projects) return <p>No Data</p> 
  
    return (
        <section className='projects-area relative py-11 md:py-28  bg-[#131313] border-b-2 border-[#555151]' id='portfollio'>
             <div className="container-xl">
             <span className='small-text' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Projects</span>
             <div className='pb-7 lg:w-2/3 text-center m-auto block'>
                    <h2 className='text-5xl lg:text-7xl text-white font-semibold pb-4' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Latest Projects</h2>
                   <div className='grid md:grid-cols-2 gap-5'> 
                        <div>
                            <p className='content-box-left' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">My recent projects showcase dynamic web applications visually stunning and responsive websites designed and development, and engaging user interfaces through frontend web design expertise.</p>
                        </div>
                            <div className='flex items-centr justify-start'>
                                <div className='line-border' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                            </div>  
                   </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                {
                   projects.map((project) => 
                     <div key={project.id} className="project-item border-2 border-[#555151] p-2 relative"> 
                             
                                <div className='projct-img md:h-[28rem]'> 
                                    <img className="w-full h-full" src={project.img_url} alt="Project" />
                                </div>
                                <div className="project-content">
                                    <h3 className='text-white text-3xl pb-5'>{project.title}</h3>
                                    <Link href={project.project_URL} target='_blank'><button className='btn-view'>View Project</button></Link>
                                </div> 
                        </div> 
                   ) 
                }  
                     
                </div> 
                <div className='text-center pt-20 hidden' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <a className='btn-primary' href="/project">View All</a>
                </div>
             </div> 
        </section>
    );
};

export default Projects;