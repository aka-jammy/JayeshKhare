import Constraction from '../parts/Construction'
import ConnectCard from './ConnectCard'
import ConnectLable from './ConnectLable'
import Cube from './Cube'
import GlobeElement from './GlobeElement'
import ChatBubbleElement from './ChatBubbleElement'

const Connectsection = (props) => {

    return (

        <section className='relative border-b-8 overflow-hidden' id="mainConnect">

            <div className="absolute top-[-100px] sm:top-[-172px] -left-90 xl:-left-10 rotate-3 scale-80 md:scale-100 ">

                <Constraction />

            </div>

            <div className="h-5 w-full border-t-4 bg-[#DAC7F5]"></div>

            <div className=" flex flex-col items-center justify-center min-h-[1850px] bg-[#DAC7F5] lg:min-h-screen w-full">

                <div className="flex z-10 mb-25 gap-5 h-full sm:w-[60%] lg:w-[72%] items-center justify-center overflow-hidden -translate-y-20 md:translate-y-20 ">

                    <div className="flex gap-5 w-full h-full flex-wrap items-center justify-center lg:items-start ">

                        {props.connectCard.map((e, idx) => {

                            return <ConnectCard key={idx} bgColor={e.bgColor} btnText={e.btnText} icon={e.icon} />
                            
                        })}

                    </div>

                </div>

                <ConnectLable />

                <Cube />

                <GlobeElement />

                <ChatBubbleElement />

            </div>

        </section>
    )
}

export default Connectsection
