import "../styles/ConnectCard.css"


import BaseCard from "./BaseCard"
import Button from "./Button"

function ConnectCard({ className, logo, alt, bgColor, btnLable, buttonIcon, onClick }) {

    return (
        <div className={`connect-card-container ${className || ""}`}>
            <BaseCard className="connect-card">
                <div className="connect-card-content">

                    <Button
                        className="connect-button"
                        onClick={onClick}
                        buttonIcon={buttonIcon}
                    >
                        {btnLable || "View Profile"}
                    </Button>

                    <div className="image-container" style={{ backgroundColor: bgColor || "#00000000" }}>
                        <img
                            src={logo} alt={alt}
                        />
                    </div>
                </div>

            </BaseCard>
        </div>
    )
}

export default ConnectCard