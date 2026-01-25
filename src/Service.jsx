import { FaServer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaPlug } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import PageFlip from "./PageFlip";



function Service() {
    return (
        <>
        <PageFlip />
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-4 fw-bold">Services I Offer</h2>
                    <p className="text-center mb-5 text-muted">Delivering end-to-end web solutions with focus on performance,
                        security, and scalability.</p>

                    <div className="row g-4">

                        {/* Service Card  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaServer size={32} className="text-primary" />
                                    </div>
                                    <h5 className="card-title">Laravel Backend Development</h5>
                                    <p className="card-text">I build scalable and secure backend systems using Laravel...</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ API development</li>
                                        <li>✔️ Authentication & roles</li>
                                        <li>✔️ Admin dashboards</li>
                                        <li>✔️ Database modeling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaReact size={32} className="text-info" />
                                    </div>
                                    <h5 className="card-title">React Frontend Development</h5>
                                    <p className="card-text">Interactive and modern UIs built using ReactJS, ensuring
                                        responsiveness and usability.</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ React components & hooks</li>
                                        <li>✔️ API integrations</li>
                                        <li>✔️ Tailwind/Bootstrap styling</li>
                                        <li>✔️ Responsive design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaLaptopCode size={32} className="text-success" />
                                    </div>
                                    <h5 className="card-title">Full-Stack Web Apps</h5>
                                    <p className="card-text">Complete web development from idea to MVP using Laravel &
                                        React stack.</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ Idea to MVP</li>
                                        <li>✔️ API + UI integration</li>
                                        <li>✔️ Admin & client dashboards</li>
                                        <li>✔️ Deployment & maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaCartPlus size={32} className="text-danger" />
                                    </div>
                                    <h5 className="card-title">E-Commerce Development</h5>
                                    <p className="card-text">Custom Laravel + React stores with carts, payments, SEO
                                        optimization, and more.</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ Product catalog & inventory</li>
                                        <li>✔️ Checkout & payment gateways</li>
                                        <li>✔️ Order management</li>
                                        <li>✔️ SEO-friendly architecture</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card  */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaPlug size={32} className="text-warning" />
                                    </div>
                                    <h5 className="card-title">API Integration Services</h5>
                                    <p className="card-text">Fast, secure API integration for payments, messaging, and
                                        third-party tools.</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ Stripe, PayPal, Razorpay</li>
                                        <li>✔️ SMS/email gateways</li>
                                        <li>✔️ Social login APIs</li>
                                        <li>✔️ CRM & analytics tools</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 text-center">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <FaTools size={32} className="text-secondary" />
                                    </div>
                                    <h5 className="card-title">Maintenance & Support</h5>
                                    <p className="card-text">Technical support, server optimization, feature upgrades,
                                        and security audits.</p>
                                    <ul className="list-unstyled d-inline-block text-start mx-auto mt-3">
                                        <li>✔️ Bug fixing & issue tracking</li>
                                        <li>✔️ New feature deployment</li>
                                        <li>✔️ Server & DB optimization</li>
                                        <li>✔️ Regular backups</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;