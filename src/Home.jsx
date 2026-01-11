import { React, useState } from "react";
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

import profileImg3 from "./assets/images/profile-img3.jpg";
import portfolio1 from "./assets/images/portfolio1.avif";
import portfolio2 from "./assets/images/portfolio2.jpg";
import Hero from "./Hero";

function Index() {

    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState({});
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
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            return newErrors;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            return newErrors;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
            return newErrors;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            return newErrors;
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "Phone must contain digits only";
            return newErrors;
        } else if (formData.phone.length !== 10) {
            newErrors.phone = "Phone must be exactly 10 digits";
            return newErrors;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
            return newErrors;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            return newErrors;
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            const firstErrorKey = Object.keys(validationErrors)[0];
            const el = document.getElementById(firstErrorKey);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.focus();
            }
            return;
        }
        setLoader(true);
        try {
            await fetch("https://script.google.com/macros/s/AKfycbzlwr91uCxDz7tOOs5tlEhU0me6X1dzF_o4HGQ4s66DEnPPA7mGEEiUsxu6AQ3_7w_q/exec", {
                method: "POST",
                mode: "no-cors",
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
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
            <section className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
                <div className="container">
                    <h2 className="section-title text-center mb-3">Get in Touch</h2>
                    <p className="text-center mb-5 text-muted">Have a project in mind or just want to say hi? I’d love to hear from
                        you.</p>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow-lg border-0 rounded-4 p-4">
                                <form method="post" onSubmit={handleSubmit} enctype="text/plain">
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Your Name</label>
                                        <input type="text" name="name" onChange={handleInputs} id="name" className="form-control" placeholder="Enter name" />
                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                    </div>

                                    <div className="mb-3">
                                        <label for="email" className="form-label">Your Email</label>
                                        <input type="text" name="email" onChange={handleInputs} id="email" className="form-control"
                                            placeholder="Enter email id" />
                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                    </div>

                                    <div className="mb-3">
                                        <label for="email" className="form-label">Your Phone</label>
                                        <input type="text" name="phone" onChange={handleInputs} id="phone" className="form-control"
                                            placeholder="Enter phone number" />
                                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                    </div>

                                    <div className="mb-3">
                                        <label for="subject" className="form-label">Subject</label>
                                        <input type="text" name="subject" onChange={handleInputs} id="subject" className="form-control"
                                            placeholder="Let’s build something great" />
                                        {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                    </div>

                                    <div className="mb-4">
                                        <label for="message" className="form-label">Your Message</label>
                                        <textarea name="message" onChange={handleInputs} id="message" className="form-control" rows="5"
                                            placeholder="Describe your project or say hello..."></textarea>
                                        {errors.message && <small className="text-danger">{errors.message}</small>}
                                    </div>

                                    <div className="d-flex justify-content-end">
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
                    <div className="row text-center mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i className="bi bi-envelope-fill text-primary fs-4 mb-2"></i>
                                <h6 className="fw-bold">Email</h6>
                                <p><a href="mailto:dhanjitsingh234@gmail.com">dhanjitsingh234@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i className="bi bi-telephone-fill text-success fs-4 mb-2"></i>
                                <h6 className="fw-bold">Phone</h6>
                                <p><a href="tel:+918002382823">+91 80023 82823</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm p-3 bg-white rounded-3 h-100">
                                <i className="bi bi-geo-alt-fill text-danger fs-4 mb-2"></i>
                                <h6 className="fw-bold">Location</h6>
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