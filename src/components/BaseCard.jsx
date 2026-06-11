import "../styles/BaseCard.css"

function BaseCard({ children, className, onClick }) {
    return (
        <>
            <div
                className={`base-card-container ${className || ""}`}
                onClick={onClick}>
                {children}
            </div>
        </>
    )
}

export default BaseCard