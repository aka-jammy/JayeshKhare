import React from 'react'
import StyledButton from '../parts/StyledButton'

const ConnectCard = (props) => {
    return (
        <div className=" h-80 lg:h-[350px] xl:h-[400px] w-[350px] lg:w-[350px] xl:w-[450px] p-3 rounded-3xl border-4 bg-(--card-Primary-Color) shrink">
            <div style={{backgroundColor:props.bgColor}} className=" h-[70%] mb-2 inset-shadow-sm inset-shadow-gray-500/50 rounded-lg flex px-20 justify-center">
                <img src={props.icon} alt=" brand icon " />
            </div>
            <StyledButton >
                {props.btnText} <img className='size-6 lg:size-10 ml-2 translate-y-1.5 md:translate-y-2.5 scale-y-[-1]' src="ic_arrow.svg" alt=" arrow img" />
            </StyledButton>
        </div>
    )
}

export default ConnectCard
