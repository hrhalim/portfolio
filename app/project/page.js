import React from 'react';

const page = () => {
    return (
        <section className='projects-area py-11 md:py-28  bg-[#131313] border-b-2 border-[#555151]'>
        <div className="container">
        <div className='pb-7 md:w-2/3 text-center m-auto block'>
               <h2 className='text-3xl md:text-7xl text-white font-semibold pb-4'>Our Projects</h2>
              <div className='grid md:grid-cols-2 gap-5'> 
                   <div>
                       <p className='content-box-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia perspiciatis modi nihil odio expedita, maiores</p>
                   </div>
                       <div className='flex items-centr justify-start'>
                           <div className='line-border'></div>
                       </div>  
              </div>
           </div>
           <div className='grid md:grid-cols-3 gap-5'>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
               <div className="project-item border border-[#555151] p-2 relative">
                   <a href="#" target="_blank">
                       <div className='projct-img md:h-[28rem]'>
                           <img className="w-auto h-full" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project" />
                       </div>
                       <div className="project-content">
                           <h3 className='text-white text-3xl pb-5'>WordPrss</h3>
                           <button className='btn-view'>View Project</button>
                       </div>
                   </a>
               </div>
           </div>  
        </div> 
   </section>   
    );
};

export default page;