import myPortfolio2 from "./assets/images/my-portfolio2.avif";

function PortfolioDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src={myPortfolio2} class="img-fluid rounded shadow" alt="Job Board Platform" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">Job Board Platform</h2>
                            <p class="lead">
                                A full-stack job posting platform where employers can post jobs, and candidates can
                                apply with resume uploads. Includes a powerful admin panel for managing postings,
                                applications, and user accounts.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Job listings with search and filter options</li>
                                <li>Resume/CV upload for job applications</li>
                                <li>Employer accounts to post and manage jobs</li>
                                <li>Applicant tracking and status updates</li>
                                <li>Admin panel for managing users, jobs, and reports</li>
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
                                    <li><strong>Client:</strong> Recruitment Agency</li>
                                    <li><strong>Year:</strong> 2024</li>
                                    <li><strong>Category:</strong> Job Portal</li>
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