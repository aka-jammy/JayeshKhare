import { useState } from "react"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [duration, setDuration] = useState(150);


    const logoClick = () => {
        window.location.reload()
    }


    return (
        <section className="w-full z-999 fixed top-0 left-0" id='mainNav'>
            <div className="relative border-b-4 bg-(--bg-Primary-Color) z-10 flex justify-between items-center w-full h-[8vh] sm:h-20 overflow-hidden " id='navBar'>
                <div id='logo'>
                    <img
                        onMouseDown={() => { setDuration(20); setShadow(true); logoClick() }}
                        onMouseUp={() => { setDuration(100); setShadow(false); }}
                        onMouseLeave={() => { setDuration(50); setShadow(false); }}

                        onTouchStart={() => { setDuration(0); setShadow(true); }}
                        onTouchEnd={() => { setDuration(50); setShadow(false); }}
                        onTouchCancel={() => { setDuration(50); setShadow(false); }}

                        className={`border-2 rounded-full h-12 sm:h-14 ml-4 sm:ml-6 transition-shadow cursor-pointer`}
                        style={{
                            transitionDuration: `${duration}ms`,
                            transform: shadow ? "translate(4px, 4px)" : "translate(0, 0)",
                            boxShadow: shadow ? "none" : "4px 4px 0 black"
                        }}
                        src="logo.png"
                        alt="logo"
                    />
                </div>

                <div onClick={() => setToggle(!toggle)}
                    className=" flex justify-center items-center h-20 w-20 z-10" id="togglenav">

                    {toggle ? <img src="ic_cross.svg" alt="menu icon" className="scale-130" /> : <img src="ic_menu.svg" alt="menu icon" className="scale-150" />}

                </div>
            </div>
            <div className={`
                         flex 
                         w-full 
                         ease-in 
                         sm:z-20
                         absolute 
                         sm:w-110 
                         lg:w-120 
                         sm:right-0 
                         duration-400 
                         justify-center 
                         sm:justify-end 
                         transition-all 
                         sm:transition-none 
                         font-silkscreen-reg
                         drop-shadow-[0_4px_0px_rgba(0,0,0,1)]
                         sm:drop-shadow-none

                        ${toggle ? "translate-y-0 opacity-100 h-fit" : "-translate-y-50 sm:-translate-y-21 h-fit sm:opacity-100 opacity-0"}
                        
                    `}
                id='navLink'>


                <ul className='flex flex-col sm:flex-row w-full text-xl sm:w-full sm:h-20 sm:absolute sm:items-center bg-(--bg-Primary-Color)'>

                    <li className='sm:border-l-2 border-b-2 sm:border-b-0 h-full w-full'><a className='flex justify-center items-center  sm:py-0 py-4 w-full sm:h-full bg-(--bg-Primary-Color) hover:bg-(--navBtn-Primary-Color) transition ' href="#mainAbout">about me</a></li>

                    <li className='sm:border-l-2 border-b-2 sm:border-b-0 h-full w-full'><a className='flex justify-center items-center  sm:py-0 py-4 w-full sm:h-full bg-(--bg-Primary-Color) hover:bg-(--navBtn-Primary-Color) transition ' href="#mainProject">projects</a></li>

                    <li className='sm:border-l-2 border-b-2 sm:border-b-0 h-full w-full'><a className='flex justify-center items-center sm:py-0 py-4 w-full sm:h-full bg-(--bg-Primary-Color) hover:bg-(--navBtn-Primary-Color) transition ' href="#mainConnect">connect</a></li>

                </ul>

            </div>
        </section>
    )
}

export default Navbar
