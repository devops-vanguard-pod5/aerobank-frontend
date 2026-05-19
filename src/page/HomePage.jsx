import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      {/* New 'Why AeroBank' Feature Section */}
      {/* We move the 'Enterprise-Grade', 'Highly Available', 'Automated Security' text here */}
      <div className="container mt-5 py-4 bg-light rounded shadow-sm">
        <div className="row text-center">
          {/* Feature 1 */}
          <div className="col-md-4 px-4">
            <div className="p-3">
              <h3 className="fw-bold text-primary">Cloud-Native Platform</h3>
              <p className="text-muted">
                Built for scale using modern container orchestration and automated pipelines.
              </p>
            </div>
          </div>
          {/* Feature 2 - Added borders for separation */}
          <div className="col-md-4 px-4 border-start border-end">
            <div className="p-3">
              <h3 className="fw-bold text-primary">High Availability</h3>
              <p className="text-muted">
                Microservices architecture deployed across Amazon EKS for resilience and performance.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-md-4 px-4">
            <div className="p-3">
              <h3 className="fw-bold text-primary">GitOps & Security</h3>
              <p className="text-muted">
                Secure deployments using declarative GitOps with ArgoCD and encrypted secrets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1 className="fw-bold text-primary">Welcome to AeroBank</h1>
            <p className="lead mt-3">
              AeroBank is an enterprise-grade cloud-native banking portal built from the ground up to demonstrate advanced DevOps principles. Explore a modernized financial platform where you can initiate secure transactions, deposit funds, and manage withdrawals with confidence.
            </p>
            <p>
              Engineered on a resilient AWS Kubernetes (EKS) microservices architecture, our platform ensures a seamless and responsive experience. Manage your finances from any device with an interface designed for technical performance and user trust. Security is integrated at every layer. We utilize full DevSecOps automation, SonarCloud analysis, and encrypted Kubernetes secrets for robust data protection.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text mt-3 px-4 py-2">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="AeroBank Engineering and Security"
              width="400"
              height="auto"
              className="home-image rounded shadow-sm"
            />
          </div>
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="AeroBank Finanical Management and GitOps Reliability"
              width="400"
              height="auto"
              className="home-image rounded shadow-sm"
            />
          </div>
          <div className="col-md-8 text-color">
            <h2 className="ms-5 fw-bold text-primary">Effortless Financial Control</h2>
            <p className="ms-5 mt-3">
              Discover a new standard of financial control through the intuitive AeroBank portal. Seamlessly handle your transactions, deposits, and withdrawals with an interface designed to simplify the user journey.
            </p>
            <p className="ms-5">
              Every interaction is backed by an operational ecosystem built for maximum reliability. Our automated GitOps pipelines process your data with enterprise-grade speed and security, providing you with peace of mind. AeroBank isn't just a project—it is a demonstration of what is possible when modern infrastructure meets secure financial management.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5 mt-3 px-4 py-2">
              Access Your Account
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <Footer />
    </div>
  );
};

export default HomePage;