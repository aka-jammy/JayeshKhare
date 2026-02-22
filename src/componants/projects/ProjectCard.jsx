import React from 'react'

const ProjectCard = () => {
    return (
        <div className="bg-[#D1FDE6] w-2xs md:w-sm h-88 border-4 rounded-lg shadow-[0_8px_0_0_black] md:shadow-[8px_8px_0px_0px_black] overflow-hidden">

            <img className=' border-b-2' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ebef5235432599.68ebde15d277c.png" alt="" />

            <p className='text-[0.8rem] md:text-[1.2rem] font-light px-2 md:px-2 py-2 w-full h-31'>An created for a local jewellery shop to replace physical records, the old way of managing gold loan.</p>
        </div>
    )
}

export default ProjectCard
