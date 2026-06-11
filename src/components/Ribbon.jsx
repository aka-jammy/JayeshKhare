import '../styles/Ribbon.css'
import RibbonEnd from '../assets/ribbon_end.svg'

function Ribbon({ children, className }) {
    return (
        <div className={`ribbon-container ${className || ""}`}>
            <div className="ribbon-content">
                <span>{children}</span>
            </div>

            <div className="ribbon-tail-container">
                <svg
                    className="ribbon-tail"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" >
                    <path d="M80.6865 1.99609C86.0317 1.99628 88.7083 8.45853 84.9287 12.2383L54.2422 42.9248C50.3371 46.83 50.3371 53.1622 54.2422 57.0674L84.9287 87.7539C88.7083 91.5337 86.0317 97.9959 80.6865 97.9961H2V1.99609H80.6865Z"/>
                </svg>
            </div>
        </div>
    )
}

export default Ribbon