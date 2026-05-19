import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-10 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color fw-bold">
                    Online Banking System
                  </h5>
                  <p className="px-md-5">
                    Seamlessly navigate through your financial journey with
                    ease, as you initiate secure transactions, conveniently
                    deposit funds into your accounts, and effortlessly withdraw
                    when needed.
                  </p>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text px-4"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center pb-4">
            © 2026 Copyright:
            <a className="text-color-3 ms-2 text-decoration-none fw-bold" href="https://oluwasheyi-portfolio.virusinferno.xyz">
              Virusinferno Digital Studio
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;