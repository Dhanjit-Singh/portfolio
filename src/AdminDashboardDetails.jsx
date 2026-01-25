import myPortfolio3 from "./assets/images/my-portfolio3.jpg";


function AdminDashboardDetails() {
    return (
        <>
            <section className="py-5">
                <div className="container">

                    {/* Project Title & Image  */}
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="card">
                                <img src={myPortfolio3} className="img-fluid rounded shadow" alt="Admin Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 className="mb-3">Admin Dashboard</h2>
                            <p className="lead">
                                A clean and modern admin dashboard built with <strong>Laravel</strong> for the backend,
                                featuring detailed analytics, data visualization, and secure role-based access control
                                for different user levels.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div className="row">
                        <div className="col-lg-8">
                            <h4 className="mb-3">Key Features</h4>
                            <ul>
                                <li>Responsive dashboard with real-time analytics</li>
                                <li>Role-based access control (Admin, Manager, Staff)</li>
                                <li>Interactive charts and graphs for data insights</li>
                                <li>User, product, and order management</li>
                                <li>Secure authentication and permissions system</li>
                            </ul>

                            <h4 className="mt-4 mb-3">Tech Stack</h4>
                            <p>
                                <span className="badge bg-dark me-2">React</span>
                                <span className="badge bg-secondary me-2">Laravel</span>
                                <span className="badge bg-dark me-2">MySQL</span>
                                <span className="badge bg-secondary me-2">Bootstrap 5</span>
                                <span className="badge bg-dark">REST API</span>
                            </p>
                        </div>

                        {/* Optional Sidebar (Project Meta)  */}
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card">
                                <div className="border rounded p-4 shadow-sm bg-light">
                                    <h6 className="text-uppercase text-muted">Project Info</h6>
                                    <ul className="list-unstyled mt-3">
                                        <li><strong>Client:</strong> Corporate Enterprise</li>
                                        <li><strong>Year:</strong> 2024</li>
                                        <li><strong>Category:</strong> Admin Dashboard</li>
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

export default AdminDashboardDetails;