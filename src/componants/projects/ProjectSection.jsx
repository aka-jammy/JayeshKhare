import React from 'react'
import Constraction from '../parts/Construction'
import ConstractionRev from '../parts/ConstructionRev'
import ProjectCard from './ProjectCard'
import ProjectCardWIP from './ProjectCardWIP'

const ProjectSection = () => {
    return (
        <section className='relative w-screen h-screen flex justify-center items-center overflow-hidden' id="mainProject">
            <div className="h-full w-full flex justify-center items-center border-t-8">

                <div className=' h-[550px] w-full flex flex-col justify-center gap-0 lg:gap-10 ' id="project">

                    <div className=" font-anton-reg text-5xl flex justify-center ">
                        <h1 className='border-b-2 py-1'>Projects</h1>
                    </div>

                    <div className=" w-full h-full p-5 flex items-center justify-center gap-5  flex-col md:flex-row">

                        <ProjectCard />
                        <ProjectCardWIP />

                    </div>
                    <div className="absolute top-9 sm:top-13 md:top-[55px] xl:top-[84px] -left-50 sm:-left-40 md:-left-30 lg:-left-20 xl:-left-10 scale-80 lg:scale-100 -rotate-5">
                        <Constraction />
                    </div>
                    <div className="absolute z-1 sm:z-0 bottom-25 md:bottom-43 -left-90 xl:-left-10 rotate-3 scale-80 md:scale-100">
                        <Constraction />
                    </div>
                    <div className="absolute bottom-0 sm:-bottom-5 md:-bottom-9 -left-90 xl:-left-10 -rotate-10 sm:-rotate-6 scale-80 md:scale-100">
                        <ConstractionRev />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
