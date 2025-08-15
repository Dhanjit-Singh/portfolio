import { React, useState } from "react";
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

import profileImg3 from "./assets/images/profile-img3.jpg";
import portfolio1 from "./assets/images/portfolio1.avif";
import portfolio2 from "./assets/images/portfolio2.jpg";
import Hero from "./Hero";

function Index() {

    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            await fetch("https://script.google.com/macros/s/AKfycbzlwr91uCxDz7tOOs5tlEhU0me6X1dzF_o4HGQ4s66DEnPPA7mGEEiUsxu6AQ3_7w_q/exec", {
                method: "POST",
                mode: "no-cors", // Prevent CORS errors
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            Swal.fire({
                title: "Success",
                text: "Thank you for contacting us! shortly we will get back to you.",
                icon: "success",
                draggable: true
            });
            e.target.reset();
            setLoader(false);

        } catch (error) {
            console.error("Error sending message:", error);
            Swal.fire({
                title: "Oops!..",
                text: "Something went wrong!",
                icon: "error",
                draggable: true
            });
            setLoader(false);
        }
    };

    return (
        <>
            {/* Hero section  */}
            <Hero />

            {/* Hero section  */}
            {/* <section class="hero main-page">
                <div class="container text-center">
                    <h1>Hello, I'm <span class="text-warning">Dhanjit Singh</span></h1>
                    <p class="lead">Full-Stack Web Developer | Laravel & React Specialist</p>
                    <a href="#contact" class="btn btn-outline-light btn-lg mt-3">Let's Work Together</a>
                </div>
            </section> */}

            {/* About section  */}
            <section id="about" class="py-5 about-section">
                <div class="container text-center">
                    <h2 class="section-title">About Me</h2>
                    <img src={profileImg3} alt="Dhanjit Singh" class="rounded-circle shadow mb-4" width="150" height="150" />
                    <p class="about-text">
                        I'm a passionate <strong>Full-Stack Web Developer</strong> with a strong background in <span
                            class="text-warning">Laravel</span> and <span class="text-info">React</span>.
                        I help businesses craft fast, secure, and scalable web solutions. With clean code and thoughtful design,
                        I aim to deliver seamless user experiences and real results.
                    </p>
                </div>
            </section>

            {/* Services section */}
            <section id="services" class="py-5 bg-light services-section">
                <div class="container">
                    <h2 class="section-title text-center">Services</h2>
                    <div class="row text-center">
                        <div class="col-md-4 mb-4">
                            <div class="service-card p-4 shadow-lg border-0 rounded">
                                <i class="fas fa-server fa-3x text-primary mb-3"></i>
                                <h5>Laravel Backend</h5>
                                <p>Powerful APIs, authentication systems, admin panels, and robust backend logic.</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="service-card p-4 shadow-lg border-0 rounded">
                                <i class="fab fa-react fa-3x text-info mb-3"></i>
                                <h5>React Frontend</h5>
                                <p>Dynamic SPAs, fast UI components, modern responsive design using ReactJS.</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="service-card p-4 shadow-lg border-0 rounded">
                                <i class="fas fa-laptop-code fa-3x text-success mb-3"></i>
                                <h5>Full-Stack Projects</h5>
                                <p>End-to-end solutions from idea to deployment, crafted with scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio section  */}
            <section id="portfolio" class="py-5">
                <div class="container">
                    <h2 class="section-title">Portfolio</h2>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="card h-100 shadow-lg border-0">
                                <div class="ratio ratio-4x3">
                                    <img src={portfolio1} class="card-img-top img-fluid object-fit-cover"
                                        alt="E-Commerce App" style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">E-Commerce Web App</h5>
                                    <p class="card-text">React frontend with Laravel backend, secure checkout, admin dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card h-100 shadow-lg border-0">
                                <div class="ratio ratio-4x3">
                                    <img src={portfolio2} class="card-img-top img-fluid object-fit-cover"
                                        alt="Job Portal" style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Job Board Application</h5>
                                    <p class="card-text">Job posting, resume upload, application tracking system – full stack
                                        solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section class="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
                <div class="container">
                    <h2 class="section-title text-center mb-3">Get in Touch</h2>
                    <p class="text-center mb-5 text-muted">Have a project in mind or just want to say hi? I’d love to hear from
                        you.</p>

                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card shadow-lg border-0 rounded-4 p-4">
                                <form method="post" onSubmit={handleSubmit} enctype="text/plain">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" name="name" onChange={handleInputs} id="name" class="form-control" placeholder="Enter name"
                                            required />
                                    </div>

                                    <div class="mb-3">
                                        <label for="email" class="form-label">Your Email</label>
                                        <input type="email" name="email" onChange={handleInputs} id="email" class="form-control"
                                            placeholder="Enter email id" required />
                                    </div>

                                    <div class="mb-3">
                                        <label for="email" class="form-label">Your Phone</label>
                                        <input type="tel" name="phone" onChange={handleInputs} minLength={10} maxLength={10} id="phone" class="form-control"
                                            placeholder="Enter phone number" required />
                                    </div>

                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" name="subject" onChange={handleInputs} id="subject" class="form-control"
                                            placeholder="Let’s build something great" />
                                    </div>

                                    <div class="mb-4">
                                        <label for="message" class="form-label">Your Message</label>
                                        <textarea name="message" onChange={handleInputs} id="message" class="form-control" rows="5"
                                            placeholder="Describe your project or say hello..." required></textarea>
                                    </div>

                                    <div class="d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            className="btn btn-dark px-4 rounded-pill"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "8px",
                                                minWidth: "160px"
                                            }}
                                        >
                                            <span>Send Message</span>

                                            {loader && (
                                                <CircularProgress
                                                    size={18}
                                                    sx={{ color: "white" }}
                                                />
                                            )}
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info  */}
                    <div class="row text-center mt-5">
                        <div class="col-md-4 mb-4">
                            <div class="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i class="bi bi-envelope-fill text-primary fs-4 mb-2"></i>
                                <h6 class="fw-bold">Email</h6>
                                <p><a href="mailto:dhanjitsingh234@gmail.com">dhanjitsingh234@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i class="bi bi-telephone-fill text-success fs-4 mb-2"></i>
                                <h6 class="fw-bold">Phone</h6>
                                <p><a>+91 80023 82823</a></p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i class="bi bi-geo-alt-fill text-danger fs-4 mb-2"></i>
                                <h6 class="fw-bold">Location</h6>
                                <p>Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Index;