import HTMLFlipBook from "react-pageflip";
import React from "react";
import "./PageFlip.css";

// Import your images (adjust paths as needed)

// import flipImg1 from "./assets/images/flip-img1.jpeg";
// import flipImg2 from "./assets/images/flip-img2.jpg";
// import flipImg3 from "./assets/images/flip-img3.jpeg";
// import flipImg4 from "./assets/images/flip-img4.jpg";
// import flipImg5 from "./assets/images/flip-img5.jpg";
// import flipImg6 from "./assets/images/flip-img6.jpg";
// import flipImg7 from "./assets/images/flip-img7.jpg";
// import flipImg8 from "./assets/images/flip-img8.jpg";

import banner1 from "./assets/images/banner1.jpg";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.jpg";
import banner4 from "./assets/images/banner4.jpg";
import banner5 from "./assets/images/banner5.jpg";
import banner6 from "./assets/images/banner6.jpg";
import banner7 from "./assets/images/banner7.jpg";
import banner8 from "./assets/images/banner8.jpg";
import banner9 from "./assets/images/banner9.jpg";
import banner10 from "./assets/images/banner10.jpg";

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
    // const isMobile = window.innerWidth < 480;
    const width = window.innerWidth;

    let bookWidth = 750;
    let bookHeight = 450;

    if (width < 480) {
        // Mobile
        bookWidth = 300;
        bookHeight = 200;
    } else if (width < 768) {
        // Tablet
        bookWidth = 500;
        bookHeight = 320;
    } else if (width < 1500) {
        // Laptop
        bookWidth = 750;
        bookHeight = 450;
    } else {
        // Large screen / Desktop
        bookWidth = 750;
        bookHeight = 450;
    }
    
    return (
        <div className="flipbook-container">
            <HTMLFlipBook
                // width={isMobile ? 300 : 750}
                // height={isMobile ? 200 : 450}
                width={bookWidth}
                height={bookHeight}
                maxWidth={1000}
                maxHeight={450}
                showCover={false} // Disable cover mode
                usePortrait={false}
                flippingTime={1000}
                style={{ margin: "0 auto" }}
                maxShadowOpacity={0.5}
                className="album-web"
            >
                {/* Pages with images - showing 2 images when book opens */}
                <Page number="1" image={banner1} />
                <Page number="2" image={banner2} />
                <Page number="3" image={banner3} />
                <Page number="4" image={banner4} />
                <Page number="5" image={banner5} />
                <Page number="6" image={banner6} />
                <Page number="7" image={banner7} />
                <Page number="8" image={banner8} />
                <Page number="9" image={banner9} />
                <Page number="10" image={banner10} />

                {/* Add empty pages if you want even number for proper spreads */}
                {/* <Page number="5" /> */}
                {/* <Page number="6" /> */}
            </HTMLFlipBook>
        </div>
    );
};

export default PageFlip;