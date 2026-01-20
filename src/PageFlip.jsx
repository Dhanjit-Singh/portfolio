import HTMLFlipBook from "react-pageflip";
import React from "react";
import "./PageFlip.css";

// Import your images (adjust paths as needed)
import img1 from "./assets/images/main-page-bg.jpg";
import img2 from "./assets/images/about-bg.jpg";
import image1 from "./assets/images/portfolio1.avif";
import image2 from "./assets/images/infotech.png";
import image3 from "./assets/images/theproshop.png";
import image4 from "./assets/images/profile-img3.jpg";

import flipImg1 from "./assets/images/flip-img1.jpeg";
import flipImg2 from "./assets/images/flip-img2.jpg";
import flipImg3 from "./assets/images/flip-img3.jpeg";
import flipImg4 from "./assets/images/flip-img4.jpg";
import flipImg5 from "./assets/images/flip-img5.jpg";
import flipImg6 from "./assets/images/flip-img6.jpg";
import flipImg7 from "./assets/images/flip-img7.jpg";
import flipImg8 from "./assets/images/flip-img8.jpg";

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                {props.image && (
                    <img
                        src={props.image}
                        alt={`Page ${props.number}`}
                        className="page-image"
                    />
                )}
                <div className="page-number">{props.number}</div>
            </div>
        </div>
    );
});

const PageFlip = () => {
    return (
        <div className="flipbook-container">
            <HTMLFlipBook
                width={750}
                height={450}
                maxWidth={1000}
                maxHeight={450}
                showCover={false} // Disable cover mode
                flippingTime={1000}
                style={{ margin: "0 auto" }}
                maxShadowOpacity={0.5}
                className="album-web"
            >
                {/* Pages with images - showing 2 images when book opens */}
                <Page number="1" image={flipImg1} />
                <Page number="2" image={flipImg2} />
                <Page number="3" image={flipImg3} />
                <Page number="4" image={flipImg4} />
                <Page number="5" image={flipImg5} />
                <Page number="6" image={flipImg6} />
                <Page number="7" image={flipImg7} />
                <Page number="8" image={flipImg8} />

                {/* Add empty pages if you want even number for proper spreads */}
                {/* <Page number="5" /> */}
                {/* <Page number="6" /> */}
            </HTMLFlipBook>
        </div>
    );
};

export default PageFlip;