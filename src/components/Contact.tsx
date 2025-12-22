import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">Contact</h2>
          <hr className="my-4" />
          <p className="text-muted mb-5">
            Feel free to reach out to me through any of the following channels:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ms-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>+1 (555) 123-4567</div>
        </div>
        <div className="col-lg-4 me-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="mailto:contact@yourdomain.com">
            contact@yourdomain.com
          </a>
        </div>
        <div className="col-lg-4 me-auto text-center">
          <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
