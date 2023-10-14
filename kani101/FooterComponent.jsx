//FooterComponent.js

import React from 'react';

const FooterComponent = () => {
 
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor bibendum sem non gravida.
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Contact Information</h4>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Email:</strong> info@museum.com
            </p>
            <p>
              <strong>Phone:</strong> +1 123 456 7890
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Opening Hours</h4>
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
            </p>
            <p>
              <strong>Saturday - Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Museum Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;