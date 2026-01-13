import { useEffect, useState } from "react";
import Waves from "./components/Waves";

const Hero = () => {

    const text = "Dhanjit Singh";
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const pauseTime = 1000;

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;

        if (!isDeleting) {
            
            if (index < text.length) {
                timer = setTimeout(() => {
                    setDisplayText(text.slice(0, index + 1));
                    setIndex(index + 1);
                }, typingSpeed);
            } else {
                
                timer = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else {
            
            if (index > 0) {
                timer = setTimeout(() => {
                    setDisplayText(text.slice(0, index - 1));
                    setIndex(index - 1);
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
            }
        }

        return () => clearTimeout(timer);
    }, [index, isDeleting]);

    return (
        <>
            <div style={{ height: "100vh", position: "relative" }}>
                {/* Waves Background */}
                <Waves
                    lineColor="#ffffff"
                    backgroundColor="#1b1515ff"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={4}
                    yGap={2}
                />

                {/* Centered Text */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#ffffff",
                        textAlign: "center",
                        zIndex: 10,
                        backgroundColor: "#070505ff"
                    }}
                >
                    <div className="container text-center">
                        <h1>Hello, I'm &nbsp;
                            <span className="text-warning">{displayText}
                                <span className="cursor">|</span>
                            </span>
                        </h1>
                        <p className="lead">Full-Stack Web Developer | React, Node js & Laravel Specialist</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;