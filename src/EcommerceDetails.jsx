import myPortfolio1 from "./assets/images/my-portfolio1.avif";


function PortfolioDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src={myPortfolio1} class="img-fluid rounded shadow" alt="E-Commerce Web App" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">E-Commerce Web App</h2>
                            <p class="lead">
                                A full-featured e-commerce solution built with <strong>React</strong> for the
                                frontend and <strong>Laravel</strong> for the backend. Includes product browsing,
                                cart management, secure checkout, and an intuitive admin dashboard.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Responsive product catalog with category and search filters</li>
                                <li>Shopping cart with real-time updates</li>
                                <li>Secure checkout process with payment gateway integration</li>
                                <li>Order tracking and email notifications</li>
                                <li>Admin dashboard for product, order, and customer management</li>
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
                            <div class="border rounded p-4 shadow-sm bg-light">
                                <h6 class="text-uppercase text-muted">Project Info</h6>
                                <ul class="list-unstyled mt-3">
                                    <li><strong>Client:</strong> Retail Chain</li>
                                    <li><strong>Year:</strong> 2024</li>
                                    <li><strong>Category:</strong> E-Commerce</li>
                                    <li><strong>Status:</strong> Completed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default PortfolioDetails;