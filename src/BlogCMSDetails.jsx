import myPortfolio5 from "./assets/images/my-portfolio5.jpg";

function BlogCMSDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">

                    {/* Project Title & Image  */}
                    <div class="row mb-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src={myPortfolio5} class="img-fluid rounded shadow" alt="Blog CMS" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 class="mb-3">Blog CMS</h2>
                            <p class="lead">
                                A custom content management system developed with <strong>Laravel</strong> for seamless blog
                                management. Includes image uploads, SEO optimization tools, and tagging for better content
                                organization and discoverability.
                            </p>
                        </div>
                    </div>

                    {/* Features / Description Section  */}
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mb-3">Key Features</h4>
                            <ul>
                                <li>Easy-to-use post creation and editing interface</li>
                                <li>Image upload and media management</li>
                                <li>SEO tools for better search engine ranking</li>
                                <li>Tagging and category management</li>
                                <li>Responsive design for both frontend and admin panel</li>
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
                                    <li><strong>Client:</strong> Content Creator</li>
                                    <li><strong>Year:</strong> 2024</li>
                                    <li><strong>Category:</strong> CMS</li>
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

export default BlogCMSDetails;