import React from 'react'
import DinoRuning from './DinoRuning';
import MovingPath from './MovingPath';

const TrexGame = () => {

  return (
    <>
      <div id='mainTrex' className='shrink-0'>
        <DinoRuning />
        {/* <MovingPath /> */}
      </div>
    </>
  )
}

export default TrexGame






{/* <div id='dinoStill' className="absolute flex justify-center items-center -top-10 -left-4 z-10">
  <img className='h-60' src="dino-without-path.svg" alt="" />
</div> */}