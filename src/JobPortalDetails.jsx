import myPortfolio2 from "./assets/images/my-portfolio2.avif";

function PortfolioDetails() {
    return (
        <>
            <section className="py-5">
                <div className="container">

                    {/* Project Title & Image  */}
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="card">
                                <img src={myPortfolio2} className="img-fluid rounded shadow" alt="Job Board Platform" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 className="mb-3">Job Board Platform</h2>
                            <p className="lead">
                                A full-stack job posting platform where employers can post jobs, and candidates can
                                apply with resume uploads. Includes a powerful admin panel for managing postings,
                                applications, and user accounts.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div className="row">
                        <div className="col-lg-8">
                            <h4 className="mb-3">Key Features</h4>
                            <ul>
                                <li>Job listings with search and filter options</li>
                                <li>Resume/CV upload for job applications</li>
                                <li>Employer accounts to post and manage jobs</li>
                                <li>Applicant tracking and status updates</li>
                                <li>Admin panel for managing users, jobs, and reports</li>
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
                                        <li><strong>Client:</strong> Recruitment Agency</li>
                                        <li><strong>Year:</strong> 2024</li>
                                        <li><strong>Category:</strong> Job Portal</li>
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