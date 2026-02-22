import React from 'react'

const BackToTop = () => {

    const clickHandler = () => {
        
    }

  return (
    <div onClick={clickHandler} className='fixed justify-center items-center flex bg-[rgba(0,0,0,0.3)] h-20 w-20 bottom-16 right-16 rounded-lg z-50'>
      <img className='-rotate-135 scale-0 md:scale-250 translate-y-4' src="ic_arrow_white.svg" alt="" />
    </div>
  )
}

export default BackToTop
