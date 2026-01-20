import about from "./assets/images/about.jpg";
import { Link } from "react-router-dom";

import PageFlip from "./PageFlip";

function About() {

    return (
        <>
            <PageFlip />
            <section class="py-5 bg-white position-relative">
                <div class="container">
                    <div class="row align-items-center g-5">

                        {/* Profile Image  */}
                        <div class="col-lg-5">
                            <div class="card position-relative">
                                <img src={about} alt="Dhanjit Singh"
                                    class="img-fluid rounded-4 shadow-lg border border-3 border-light w-100"
                                    style={{ height: "auto", maxHeight: "420px", objectFit: "cover", objectPosition: "center" }} />

                                <span
                                    class="position-absolute bottom-0 start-0 mb-3 ms-3 badge rounded-pill bg-success px-3 py-2 shadow">
                                    Available for Work
                                </span>
                            </div>
                        </div>


                        {/* About Content */}
                        <div class="col-lg-7">
                            <div class="mb-3">
                                <span class="badge text-uppercase bg-primary bg-gradient text-white px-3 py-2 fw-semibold">About
                                    Me</span>
                            </div>
                            <h1 class="fw-bold display-5 mb-3">Dhanjit Singh</h1>
                            <p class="fs-5 text-muted mb-4">
                                A <strong>Full-Stack Developer</strong> specializing in <strong>Laravel</strong> and
                                <strong>React</strong>, with over <strong>5 years of experience</strong> building scalable web
                                apps, APIs, and user-centric frontends for startups and growing companies.
                            </p>
                            <p class="text-muted mb-3">
                                From eCommerce platforms to custom dashboards, I focus on crafting maintainable,
                                high-performance code that solves real-world business problems. I bring clarity, communication,
                                and clean architecture to every project.
                            </p>
                            <p class="text-muted mb-4">
                                My mission is to help startups turn their ideas into scalable tech products—and eventually build
                                a product-driven startup of my own.
                            </p>
                            <Link to="/contact" class="btn btn-dark btn-lg px-4 py-2 rounded-pill shadow-sm">Let’s Work
                                Together</Link>
                        </div>

                    </div>

                    {/* Skills / Highlights */}
                    <div class="row mt-5 text-center">
                        <div class="col-md-4 mb-4">
                            <div class="card p-4 rounded-4 shadow-sm h-100 bg-light border">
                                <h3 class="fw-bold text-primary">5+ Years</h3>
                                <p class="mb-0 text-muted">Web Development Experience</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card p-4 rounded-4 shadow-sm h-100 bg-light border">
                                <h3 class="fw-bold text-primary">25+ Projects</h3>
                                <p class="mb-0 text-muted">Delivered for Global Clients</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card p-4 rounded-4 shadow-sm h-100 bg-light border">
                                <h3 class="fw-bold text-primary">Laravel + React</h3>
                                <p class="mb-0 text-muted">My Modern Tech Stack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;