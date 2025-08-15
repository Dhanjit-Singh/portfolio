import myPortfolio3 from "./assets/images/my-portfolio3.jpg";


function AdminDashboardDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src={myPortfolio3} class="img-fluid rounded shadow" alt="Admin Dashboard" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">Admin Dashboard</h2>
                            <p class="lead">
                                A clean and modern admin dashboard built with <strong>Laravel</strong> for the backend,
                                featuring detailed analytics, data visualization, and secure role-based access control
                                for different user levels.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Responsive dashboard with real-time analytics</li>
                                <li>Role-based access control (Admin, Manager, Staff)</li>
                                <li>Interactive charts and graphs for data insights</li>
                                <li>User, product, and order management</li>
                                <li>Secure authentication and permissions system</li>
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
                                    <li><strong>Client:</strong> Corporate Enterprise</li>
                                    <li><strong>Year:</strong> 2024</li>
                                    <li><strong>Category:</strong> Admin Dashboard</li>
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

export default AdminDashboardDetails;