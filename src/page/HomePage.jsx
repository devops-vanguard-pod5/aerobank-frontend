import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1 className="fw-bold text-primary">Welcome to AeroBank</h1>
            <p className="lead mt-3">
              Experience the next generation of secure, cloud-native banking. 
              Seamlessly navigate through your financial journey with ease, as you initiate secure 
              transactions, conveniently deposit funds, and effortlessly withdraw when needed.
            </p>
            <p>
              Powered by a highly available AWS Kubernetes (EKS) microservices architecture, 
              AeroBank ensures a smooth and intuitive experience, giving you full control over 
              your finances from any device. With advanced DevSecOps security measures and 
              encrypted Kubernetes secrets in place, you can trust that your sensitive 
              information is safeguarded throughout every interaction.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text mt-3 px-4 py-2">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="AeroBank Secure Banking"
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
              alt="AeroBank Financial Control"
              width="400"
              height="auto"
              className="home-image rounded shadow-sm"
            />
          </div>
          <div className="col-md-8 text-color">
            <h2 className="ms-5 fw-bold text-primary">Experience Effortless Financial Management</h2>
            <p className="ms-5 mt-3">
              Discover a new level of financial control through our intuitive 
              AeroBank portal. Seamlessly manage transactions, deposits, 
              and withdrawals with a user-friendly interface designed to 
              simplify your banking experience. 
            </p>
            <p className="ms-5">
              Deployed via automated GitOps pipelines for maximum reliability, our platform 
              ensures your banking data is processed with enterprise-grade speed and security. 
              Join us in revolutionizing the way you interact with your finances.
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