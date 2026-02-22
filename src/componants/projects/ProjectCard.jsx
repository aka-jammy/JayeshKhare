import React from 'react'

const ProjectCard = ({ image, description, onClick }) => {
    return (
        <div className="bg-[#D1FDE6] w-2xs md:w-sm h-88 border-4 rounded-lg shadow-[0_8px_0_0_black] md:shadow-[8px_8px_0px_0px_black] overflow-hidden cursor-pointer hover:shadow-[0_12px_0_0_black] md:hover:shadow-[12px_12px_0px_0px_black] transition-shadow" onClick={onClick}>

            <img className=' border-b-2' src={image} alt="project" />

            <p className='text-[0.8rem] md:text-[1.2rem] font-light px-2 md:px-2 py-2 w-full h-31'>{description}</p>
        </div>
    )
}

export default ProjectCard
