import '../styles/Cube.css'
import CubeBody from '../assets/cube/body.svg'
import CubeEye from '../assets/cube/eye.svg'

export default function Cube({ className }) {
    return (<div className={`cube-container ${className || ""}`}>

        <div className='cube-body' />

    </div>)
}