import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* AeroBank Branding Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to AeroBank</h1>
        <p className="lead text-muted mt-3">
          Experience the next generation of secure, cloud-native banking. 
          AeroBank is powered by a robust microservices architecture, ensuring 
          high availability, seamless transactions, and enterprise-grade security.
        </p>
      </div>

      {/* Pod 5 Team Section */}
      <div className="text-center mt-5">
        <h2 className="mb-4 fw-bold">Meet The Team: Pod 5 (DevOps Vanguard)</h2>
        <p className="text-muted mb-5">
          The engineering team behind the deployment, security, and infrastructure of the AeroBank Capstone Project.
        </p>
        
        <div className="row justify-content-center">
          {/* Tech Lead: Oluwasheyi */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              {/* Replace the src with your actual image path later */}
              <img 
                src="https://via.placeholder.com/300x300?text=Oluwasheyi+Photo" 
                className="card-img-top rounded-circle w-50 mx-auto mt-4" 
                alt="Oluwasheyi Ojelade" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Oluwasheyi Ojelade</h5>
                <h6 className="card-subtitle mb-2 text-primary">Tech Lead / Cloud DevOps Engineer</h6>
                <p className="card-text text-muted small mt-3">
                  Architected the AWS EKS infrastructure, implemented GitOps CI/CD pipelines via GitHub Actions & ArgoCD, and secured the RDS database with Kubernetes Secrets.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 Placeholder */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member+Photo" 
                className="card-img-top rounded-circle w-50 mx-auto mt-4" 
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Member Name</h5>
                <h6 className="card-subtitle mb-2 text-primary">DevOps Engineer</h6>
                <p className="card-text text-muted small mt-3">
                  (Add contribution here: e.g., Configured SonarCloud DevSecOps pipelines, managed containerization, and developed monitoring dashboards.)
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 Placeholder */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member+Photo" 
                className="card-img-top rounded-circle w-50 mx-auto mt-4" 
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Member Name</h5>
                <h6 className="card-subtitle mb-2 text-primary">Cloud Security Engineer</h6>
                <p className="card-text text-muted small mt-3">
                  (Add contribution here: e.g., Engineered AWS IAM roles, optimized Dockerfile security, and eradicated legacy CORS vulnerabilities.)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;