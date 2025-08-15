import { React, useState } from "react";
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';


function Contact() {

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

export default Contact;