import { Link } from 'react-router-dom';

import myPortfolio1 from "./assets/images/my-portfolio1.avif";
import myPortfolio2 from "./assets/images/my-portfolio2.avif";
import myPortfolio3 from "./assets/images/my-portfolio3.jpg";
import myPortfolio4 from "./assets/images/my-portfolio4.jpg";
import myPortfolio5 from "./assets/images/my-portfolio5.jpg";
import myPortfolio6 from "./assets/images/my-portfolio6.webp";

import PageFlip from "./PageFlip";

function Portfolio() {
    return (
        <>
            <PageFlip />

            <section class="py-5">
                <div class="container">
                    <h2 class="section-title text-center mb-5">My Portfolio</h2>
                    <div class="row g-4">

                        {/* Project 1  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio1} class="card-img-top" alt="E-Commerce Web App" />
                                <div class="card-body">
                                    <h5 class="card-title">E-Commerce Web App</h5>
                                    <p class="card-text">React + Laravel project with cart, checkout, and admin dashboard.</p>
                                    <Link to="/e-commerce-detail" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 2  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio2} class="card-img-top" alt="Job Board Platform" />
                                <div class="card-body">
                                    <h5 class="card-title">Job Board Platform</h5>
                                    <p class="card-text">Full-stack job posting platform with resume upload & admin panel.</p>
                                    <Link to="/job-portal-detail" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 3  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio3} class="card-img-top" alt="Admin Dashboard" />
                                <div class="card-body">
                                    <h5 class="card-title">Admin Dashboard</h5>
                                    <p class="card-text">Clean Laravel-powered backend dashboard with data analytics and
                                        role-based access.</p>
                                    <Link to="/admin-dashboard-details" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 4  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio4} class="card-img-top" alt="CRM Tool" />
                                <div class="card-body">
                                    <h5 class="card-title">Custom CRM Tool</h5>
                                    <p class="card-text">Built for a local business to manage leads, tasks, and follow-ups with
                                        notifications.</p>
                                    <Link to="/custom-crm-details" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 5  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio5} class="card-img-top" alt="Blog CMS" />
                                <div class="card-body">
                                    <h5 class="card-title">Blog CMS</h5>
                                    <p class="card-text">Custom content management system using Laravel with image uploads, SEO,
                                        and tags.</p>
                                    <Link to="/blog-cms-details" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 6  */}
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100 shadow-sm">
                                <img src={myPortfolio6} class="card-img-top" alt="Inventory System" />
                                <div class="card-body">
                                    <h5 class="card-title">Inventory Management</h5>
                                    <p class="card-text">React + Laravel system for stock tracking, alerts, and reports for
                                        retailers.</p>
                                    <Link to="/inventory-detail" class="btn btn-outline-dark btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;