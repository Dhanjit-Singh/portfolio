import myPortfolio4 from "./assets/images/my-portfolio4.jpg";


function CustomCRMDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <div className="card">
                                <img src={myPortfolio4} class="img-fluid rounded shadow" alt="Custom CRM Tool" />
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">Custom CRM Tool</h2>
                            <p class="lead">
                                A tailored CRM solution developed for a local business to manage leads, tasks, and follow-ups
                                efficiently. Includes real-time notifications, task assignments, and an intuitive interface
                                to boost productivity.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Lead management with status tracking</li>
                                <li>Task assignment and progress monitoring</li>
                                <li>Automated follow-up reminders and notifications</li>
                                <li>Search and filter for quick data access</li>
                                <li>Role-based access for different team members</li>
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
                                        <li><strong>Client:</strong> Local Business</li>
                                        <li><strong>Year:</strong> 2024</li>
                                        <li><strong>Category:</strong> CRM Tool</li>
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

export default CustomCRMDetails;