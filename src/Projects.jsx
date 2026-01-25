import './Projects.css';

import proshopImg from "./assets/images/theproshop.png";
import prodhopFullImg from "./assets/images/theproshop-fullpage.png";
import cyclelabImg from "./assets/images/cyclelab.png";
import cyclelabFullImg from "./assets/images/cyclelabFullImage.png";
import cwc from "./assets/images/cwc.png";
import cwcFullImage from "./assets/images/cwcFullImage.png";
import infotechImg from "./assets/images/infotech.png";
import infotechFullImg from "./assets/images/infotechFullImage.png";
import joysBiryani from "./assets/images/joysbiryani.png";
import joysBiryaniFullImg from "./assets/images/joysbiryaniFullImage.png";
import jagilamImg from "./assets/images/jagilam.png";
import jagilamFullImg from "./assets/images/jagilamFullImage.png";

import PageFlip from "./PageFlip";


const Projects = () => {

    return (
        <>
            <PageFlip />

            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">My Projects</h2>
                    <div className="row g-4">

                        {/* Project 1  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The Proshop</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={proshopImg} alt='img' className="img-front" />
                                    <img src={prodhopFullImg} alt='img' className="img-back" />
                                </div>

                                <div className="card-body">
                                    <a className="card-title" href='https://theproshop.co.za/' target='_blank' rel="noreferrer">The Proshop (E-Commerce Web App)</a>
                                    <p className="card-text">
                                        Laravel project with cart, checkout, and admin dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project 2  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The Cyclelab</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={cyclelabImg} alt='img' className="img-front" />
                                    <img src={cyclelabFullImg} alt='img' className="img-back" />
                                </div>
                                <div className="card-body">
                                    <a className="card-title" href='https://www.cyclelab.com/' target='_blank' rel="noreferrer">Cycle Lab (E-Commerce Web App)</a>
                                    <p className="card-text">Laravel project with cart, checkout, and admin dashboard.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 3  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The CWC Cyclelab</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={cwc} alt='img' className="img-front" />
                                    <img src={cwcFullImage} alt='img' className="img-back" />
                                </div>
                                <div className="card-body">
                                    <a className="card-title" href='https://cwcycles.co.za/' target='_blank' rel="noreferrer">CWC Cycles (E-Commerce Web App)</a>
                                    <p className="card-text">Laravel project with cart, checkout, and admin dashboard.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 4  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>InfoTech Launch</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={infotechImg} alt='img' className="img-front" />
                                    <img src={infotechFullImg} alt='img' className="img-back" />
                                </div>
                                <div className="card-body">
                                    <a className="card-title" href='https://infotechlaunch.com/' target='_blank' rel="noreferrer">InfoTech Launch (Business & Tech Website)</a>
                                    <p className="card-text">Corporate website built with modern UI, service pages, and lead-generation focus.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 5  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>Joy's Biryani</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={joysBiryani} alt='img' className="img-front" />
                                    <img src={joysBiryaniFullImg} alt='img' className="img-back" />
                                </div>
                                <div className="card-body">
                                    <a className="card-title" href='https://joysbiryani.com/' target='_blank' rel="noreferrer">Joy’s Biryani (Restaurant Website)</a>
                                    <p className="card-text">Restaurant website with menu showcase, location details, and contact information.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 6  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>Jagilam</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={jagilamImg} alt='img' className="img-front" />
                                    <img src={jagilamFullImg} alt='img' className="img-back" />
                                </div>
                                <div className="card-body">
                                    <a className="card-title" href='https://jagilam.com/' target='_blank' rel="noreferrer">Jagilam (Pet Care Website)</a>
                                    <p className="card-text">Pet care website showcasing services, products, and animal wellness information.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;