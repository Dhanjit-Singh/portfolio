import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const phoneNumber = "918002382823";
    const message = "Hi, I just visited your portfolio and I'm really impressed! I'd love to discuss my project and learn more about your services.";

    const [showText, setShowText] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(true);

            // Hide text after 4 seconds
            setTimeout(() => {
                setShowText(false);
            }, 4000);
        }, 8000); // every 10 seconds show again

        return () => clearInterval(interval);
    }, []);


    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="whatsapp-container">
                <div
                    className={`whatsapp-float ${showText ? "expanded" : ""}`}
                    onClick={handleClick}
                >
                    <FaWhatsapp size={24} />
                    {showText && <span className="whatsapp-text">Chat with us</span>}
                </div>

                <div className="whatsapp-tooltip">💬 Chat with us!</div>
            </div>
        </>
    );
};

export default WhatsAppButton;