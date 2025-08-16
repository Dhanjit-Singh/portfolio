import myPortfolio6 from "./assets/images/my-portfolio6.webp";

function PortfolioDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <div className="card">
                                <img src={myPortfolio6} class="img-fluid rounded shadow" alt="Inventory Management" />
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">Inventory Management System</h2>
                            <p class="lead">
                                A modern, responsive inventory management system built using <strong>React</strong> for the
                                frontend and <strong>Laravel</strong> for the backend. Designed for retailers to easily track
                                stock levels, receive alerts, and generate detailed reports.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Real-time stock tracking and dashboard overview</li>
                                <li>Low stock email/SMS alerts for critical products</li>
                                <li>Barcode scanning support</li>
                                <li>Customizable reports and filters (by category, brand, date)</li>
                                <li>Multi-user role-based access (admin, manager, staff)</li>
                            </ul>

                            <h4 class="mt-4 mb-3">Tech Stack</h4>
                            <p>
                                <span class="badge bg-dark me-2">React</span>
                                <span class="badge bg-secondary me-2">Laravel</span>
                                <span class="badge bg-dark me-2">MySQL</span>
                                <span class="badge bg-secondary me-2">Bootstrap 5</span>
                                <span class="badge bg-dark">REST API</span>
                            </p>
                        </div>

                        {/* Optional Sidebar (Project Meta)  */}
                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <div className="card">
                                <div class="border rounded p-4 shadow-sm bg-light">
                                    <h6 class="text-uppercase text-muted">Project Info</h6>
                                    <ul class="list-unstyled mt-3">
                                        <li><strong>Client:</strong> Retail Chain</li>
                                        <li><strong>Year:</strong> 2024</li>
                                        <li><strong>Category:</strong> Inventory System</li>
                                        <li><strong>Status:</strong> Completed</li>
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

export default PortfolioDetails;