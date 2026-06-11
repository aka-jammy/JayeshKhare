import ConnectCard from "../components/ConnectCard";
import ContactForm from "../components/ContactForm.jsx";
import Cube from "../components/Cube.jsx";
import Ribbon from "../components/Ribbon";
import ConnectOptions from "../data/connect_options.js"
import CopyIcon from '../assets/icons/ic_copy.svg'
import "./ConnectPage.css"

function ConnectPage() {

    async function onBtnClick(option) {
        if (!option) return;

        const l = atob(option.link)

        if (option.platform === "Email") {
            await navigator.clipboard.writeText(l);
            alert("Email Copied to your clipboard! :)")
            return
        }

        window.open(l, "_blank", "noopener,noreferrer");
    }

    return (
        <div id='connect'>
            <section className="connect-section">
                <Ribbon className="connect-ribbon">Connect</Ribbon>



                <div className="card-grid-container">

                    {ConnectOptions.map((option) => (
                        <ConnectCard
                            key={option.id}
                            logo={option.logo}
                            alt={option.platform + " logo"}
                            bgColor={option.bg_color}
                            btnLable={option.btn_label}
                            buttonIcon={option.platform === "Email" ? CopyIcon : null}
                            onClick={() => onBtnClick(option)}
                        />
                    ))}


                </div>

                <div className="contact-form-container">
                    <div className="text-container">
                        <h2>Contact Form</h2>
                        <span>Feel free to send a message!</span>

                        <Cube className={'cuby'} />
                    </div>
                    <ContactForm className={'contact-form'} />
                </div>



            </section>
        </div>
    )
}

export default ConnectPage;