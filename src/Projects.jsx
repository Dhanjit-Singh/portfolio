import { Link } from 'react-router-dom';
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

            <section class="py-5">
                <div class="container">
                    <h2 class="section-title text-center mb-5">My Projects</h2>
                    <div class="row g-4">

                        {/* Project 1  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The Proshop</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={proshopImg} className="img-front" />
                                    <img src={prodhopFullImg} className="img-back" />
                                </div>

                                <div className="card-body">
                                    <a className="card-title" href='https://theproshop.co.za/' target='_blank'>The Proshop (E-Commerce Web App)</a>
                                    <p className="card-text">
                                        Laravel project with cart, checkout, and admin dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project 2  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The Cyclelab</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={cyclelabImg} className="img-front" />
                                    <img src={cyclelabFullImg} className="img-back" />
                                </div>
                                <div class="card-body">
                                    <a class="card-title" href='https://www.cyclelab.com/' target='_blank'>Cycle Lab (E-Commerce Web App)</a>
                                    <p class="card-text">Laravel project with cart, checkout, and admin dashboard.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 3  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>The CWC Cyclelab</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={cwc} className="img-front" />
                                    <img src={cwcFullImage} className="img-back" />
                                </div>
                                <div class="card-body">
                                    <a class="card-title" href='https://cwcycles.co.za/' target='_blank'>CWC Cycles (E-Commerce Web App)</a>
                                    <p class="card-text">Laravel project with cart, checkout, and admin dashboard.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 4  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>InfoTech Launch</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={infotechImg} className="img-front" />
                                    <img src={infotechFullImg} className="img-back" />
                                </div>
                                <div class="card-body">
                                    <a class="card-title" href='https://infotechlaunch.com/' target='_blank'>InfoTech Launch (Business & Tech Website)</a>
                                    <p class="card-text">Corporate website built with modern UI, service pages, and lead-generation focus.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 5  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>Joy's Biryani</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={joysBiryani} className="img-front" />
                                    <img src={joysBiryaniFullImg} className="img-back" />
                                </div>
                                <div class="card-body">
                                    <a class="card-title" href='https://joysbiryani.com/' target='_blank'>Joy’s Biryani (Restaurant Website)</a>
                                    <p class="card-text">Restaurant website with menu showcase, location details, and contact information.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 6  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-sm portfolio-card">
                                <div className="card-header text-center">
                                    <h3>Jagilam</h3>
                                </div>
                                <div className="image-wrapper">
                                    <img src={jagilamImg} className="img-front" />
                                    <img src={jagilamFullImg} className="img-back" />
                                </div>
                                <div class="card-body">
                                    <a class="card-title" href='https://jagilam.com/' target='_blank'>Jagilam (Pet Care Website)</a>
                                    <p class="card-text">Pet care website showcasing services, products, and animal wellness information.</p>
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