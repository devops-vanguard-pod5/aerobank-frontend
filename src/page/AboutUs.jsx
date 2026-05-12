import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* AeroBank Mission */}
      <div className="text-center mb-5 pb-4 border-bottom">
        <h1 className="fw-bold text-primary">About AeroBank</h1>
        <p className="lead text-muted mt-3 mx-auto" style={{ maxWidth: "800px" }}>
          AeroBank is a next-generation banking platform built as a capstone demonstration of 
          advanced cloud computing. Powered by a robust microservices architecture on Amazon EKS, 
          it ensures high availability, rapid CI/CD deployments, and enterprise-grade security.
        </p>
      </div>

      {/* Pod 5 Team Section */}
      <div className="text-center mt-5">
        <h2 className="mb-2 fw-bold">Meet The Team</h2>
        <h4 className="text-primary mb-4">Pod 5: DevOps Vanguard</h4>
        <p className="text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
          The engineering team behind the architecture, deployment, and security of the AeroBank infrastructure.
        </p>
        
        <div className="row justify-content-center">
          
          {/* Member 1: Tech Lead */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Oluwasheyi" 
                className="card-img-top rounded-circle mx-auto mt-4" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt="Oluwasheyi Ojelade" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mt-2">Oluwasheyi Ojelade</h5>
                <h6 className="card-subtitle mb-3 text-primary">Tech Lead / Cloud DevOps Engineer</h6>
                <p className="card-text text-muted small">
                  Architected the AWS EKS infrastructure, implemented GitOps CI/CD pipelines via GitHub Actions & ArgoCD, and secured the RDS database with Kubernetes Secrets.
                </p>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member" 
                className="card-img-top rounded-circle mx-auto mt-4" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mt-2">Team Member 2 Name</h5>
                <h6 className="card-subtitle mb-3 text-primary">Cloud Engineer</h6>
                <p className="card-text text-muted small">
                  (Insert contribution here: e.g., Managed containerization, developed monitoring dashboards, and deployed application manifests.)
                </p>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member" 
                className="card-img-top rounded-circle mx-auto mt-4" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mt-2">Team Member 3 Name</h5>
                <h6 className="card-subtitle mb-3 text-primary">DevSecOps Engineer</h6>
                <p className="card-text text-muted small">
                  (Insert contribution here: e.g., Engineered AWS IAM roles, integrated SonarCloud security scanning, and eradicated legacy code vulnerabilities.)
                </p>
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member" 
                className="card-img-top rounded-circle mx-auto mt-4" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mt-2">Team Member 4 Name</h5>
                <h6 className="card-subtitle mb-3 text-primary">Site Reliability Engineer</h6>
                <p className="card-text text-muted small">
                  (Insert contribution here: e.g., Configured high-availability replicas, managed Route 53 DNS routing, and performed system integration testing.)
                </p>
              </div>
            </div>
          </div>

          {/* Member 5 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/300x300?text=Team+Member" 
                className="card-img-top rounded-circle mx-auto mt-4" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                alt="Team Member" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mt-2">Team Member 5 Name</h5>
                <h6 className="card-subtitle mb-3 text-primary">Release Manager</h6>
                <p className="card-text text-muted small">
                  (Insert contribution here: e.g., Oversaw sprint planning in Jira, managed Git branching strategies, and documented the software architecture.)
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