import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Contact AeroBank Support</h1>
        <p className="text-muted">
          Need assistance with your cloud banking environment? Our DevSecOps support team is here to help.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-md-7 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Send us a message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label text-muted">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted">Email Address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted">How can we help?</label>
                  <textarea className="form-control" rows="4" placeholder="Describe your issue..."></textarea>
                </div>
                <button type="button" className="btn bg-color custom-bg-text w-100 py-2">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100 custom-bg text-color">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4 text-white">Reach Out</h4>
              
              <div className="mb-4">
                <h6 className="fw-bold text-white mb-1">Email</h6>
                <p className="mb-0">support@devopsvanguard.online</p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold text-white mb-1">Architecture Desk</h6>
                <p className="mb-0">AWS EKS Region: us-east-1</p>
                <p>Node Availability: 99.9%</p>
              </div>

              <div>
                <h6 className="fw-bold text-white mb-1">Headquarters</h6>
                <p className="mb-0">Pod 5 Command Center</p>
                <p>DevOps Vanguard Capstone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;