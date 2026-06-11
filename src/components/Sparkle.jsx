import "../styles/Sparkle.css"

function Sparkle({ className }) {

    function giveSparkle(class_name) {
        return (
            <svg className={`sparkle-svg ${class_name || ""}`} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path id="outline" d="M45 5V35H35V45H15V55H35L35 65H45V95H55V65H65V55H85V45H65V35H55V5H45Z" fill="#FFA33B" />
                <path d="M46 6V36H36V46H16V54H36L36 64H46V94H54V64H64V54H84V46H64V36H54V6H46Z" fill="#FFF2AA" />
                <path d="M49 9V39H39V49H19V54H36L36 59H39V64H46V69H49V94H54V64H64V54H84V49H69V46H64V39H59V36H54V9H49Z" fill="#FFE13B" />
            </svg>

        )
    }

    return (
        <div className={`sparkle-container ${className || ""}`}>
            {giveSparkle("sparkle-big")}
            {giveSparkle("sparkle-small")}
            {giveSparkle("sparkle-medium")}
        </div>
    )
}

export default Sparkle