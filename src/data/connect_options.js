import EmailIcon from "../assets/icons/ic_mail.svg"
import DribbbleWordmark from "../assets/wordmarks/dribbble_wordmark.svg"
import LinkedInWordmark from "../assets/wordmarks/linkedIn_wordmark.svg"
import BehanceWordmark from "../assets/wordmarks/behance_wordmark.svg"

export const connect_options = [
    {
        id: "1",
        platform: "Email",
        btn_label: "Email (copy)",
        logo: EmailIcon,
        bg_color: "#a47bed",
        link: "amF5ZXNoa2hhcmU2QGdtYWlsLmNvbQ==",
    },

    {
        id: "2",
        platform: "LinkedIn",
        btn_label: "Visit Profile",
        logo: LinkedInWordmark,
        bg_color: "#FFFFFFFF",
        link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pheWVzaC1raGFyZQ==",
    },

    {
        id: "3",
        platform: "Dribbble",
        btn_label: "Visit Profile",
        logo: DribbbleWordmark,
        bg_color: "#E74C87FF",
        link: "aHR0cHM6Ly9kcmliYmJsZS5jb20vMV9KYW1teQ==",
    },

    {
        id: "4",
        platform: "Behance",
        btn_label: "Visit Profile",
        logo: BehanceWordmark,
        bg_color: "#4C88FD",
        link: "aHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvamF5ZXNoa2hhcmU=",
    },

]

export default connect_options;