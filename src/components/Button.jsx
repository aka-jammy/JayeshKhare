import '../styles/Button.css'
import DefaultIcon from '../assets/icons/ic_arrow.svg'

function Button({ children, className, onClick, buttonIcon }) {
    const icon = buttonIcon ?? DefaultIcon;
    return (
        <div className={`button-container ${className || ""}`} onClick={onClick}>

            <button>
                <span>{children}</span>
                <div className='button-icon' style={{
                    backgroundImage: `url("${icon}")`,
                }} />
            </button>
        </div>
    )
}

export default Button