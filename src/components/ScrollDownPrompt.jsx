import "../styles/ScrollDownPrompt.css"

function ScrollDownPrompt({ className }) {
    return (
        <>
            <div className={`scroll-down-prompt ${className || ""}`} />
        </>
    )
}

export default ScrollDownPrompt