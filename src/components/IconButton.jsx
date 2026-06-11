import "../styles/IconButton.css"
import DefaultIcon from "../assets/icons/ic_arrow.svg"

function IconButton({ children, className, onClick, ariaLabel, hoverColor, background = DefaultIcon }) {

    function hoverColorDecipher2000(color) {

        if (!color) return "var(--background-color)"

        if (color.includes("--")) return `var(${color})`

        return color
    }

    return (
        <div className={`icon-button-container ${className || ""}`}>
            <button
                className="icon-button"
                aria-label={ariaLabel}
                onClick={onClick}
                style={{
                    "--hover-color": hoverColorDecipher2000(hoverColor),
                    backgroundImage: `url("${background}")`,
                }}
            >
                {children}
            </button>
        </div>
    )
}

export default IconButton