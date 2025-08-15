
import Waves from "./components/Waves";

const Hero = () => {
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
                    <div class="container text-center">
                        <h1>Hello, I'm <span class="text-warning">Dhanjit Singh</span></h1>
                        <p class="lead">Full-Stack Web Developer | React, Node js & Laravel Specialist</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;