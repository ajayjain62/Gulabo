import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-effective-date">Effective Date: [Insert Date]</p>

      <p className="terms-text">
        Welcome to Gulabi Decor. By accessing or using our services, you agree to
        comply with and be bound by the following terms and conditions. Please
        read these terms carefully before using our website and services.
      </p>

      <h2 className="terms-section-title">1. Acceptance of Terms</h2>
      <p className="terms-text">
        By using our website, products, and services, you acknowledge and agree
        to these Terms and Conditions, as well as any additional terms and
        policies we may publish from time to time.
      </p>

      <h2 className="terms-section-title">2. Use of Our Services</h2>
      <p className="terms-text">
        Our services are intended for business purposes, and access is granted
        only to authorized users. You agree to use our services solely for legal
        purposes and in compliance with all applicable laws and regulations.
      </p>

      <h2 className="terms-section-title">3. Account Registration</h2>
      <p className="terms-text">
        To access certain features of our services, you may need to create an
        account. You agree to provide accurate, complete, and up-to-date
        information when registering, and you are responsible for maintaining
        the confidentiality of your account credentials.
      </p>

      <h2 className="terms-section-title">4. Intellectual Property</h2>
      <p className="terms-text">
        All content, trademarks, and intellectual property on our website and
        services are owned by Gulabi Decor or licensed to us. You may not use,
        copy, distribute, or modify any content without our express permission.
      </p>

      <h2 className="terms-section-title">5. Privacy</h2>
      <p className="terms-text">
        Your use of our website and services is also governed by our Privacy
        Policy, which outlines how we collect, use, and protect your personal
        information. Please review the Privacy Policy to understand how your data
        is handled.
      </p>

      <h2 className="terms-section-title">6. Limitations of Liability</h2>
      <p className="terms-text">
        Gulabi Decor is not liable for any damages, losses, or injuries that
        result from the use or inability to use our services, website, or content.
        We do not guarantee the accuracy, completeness, or reliability of any
        information provided through our services.
      </p>

      <h2 className="terms-section-title">7. Termination of Use</h2>
      <p className="terms-text">
        We may suspend or terminate your access to our services at any time,
        without notice, if you violate these terms or engage in unlawful activities.
        You agree that upon termination, any rights granted to you under these Terms
        and Conditions will immediately cease.
      </p>

      <h2 className="terms-section-title">8. Indemnification</h2>
      <p className="terms-text">
        You agree to indemnify, defend, and hold harmless Gulabi Decor, its
        affiliates, employees, and agents from any claims, losses, damages,
        liabilities, and expenses arising from your use of our services or any
        violation of these Terms and Conditions.
      </p>

      <h2 className="terms-section-title">9. Changes to Terms</h2>
      <p className="terms-text">
        We reserve the right to modify, update, or revise these Terms and
        Conditions at any time. The updated terms will be posted on our website,
        and the effective date will be revised accordingly. Please check this page
        periodically for changes.
      </p>

      <h2 className="terms-section-title">10. Governing Law</h2>
      <p className="terms-text">
        These Terms and Conditions are governed by the laws of India. Any
        disputes arising from these terms will be resolved in the appropriate
        courts located in Jaipur, Rajasthan.
      </p>

      <h2 className="terms-section-title">11. Contact Us</h2>
      <p className="terms-text">
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at:
      </p>
      <p className="terms-text">
        Email: <a href="mailto:GulabiDecor123@gmail.com" className="terms-link">GulabiDecor123@gmail.com</a>
      </p>
      <p className="terms-text">
        Phone: <a href="tel:+919828052001" className="terms-link">+91 9828052001</a>
      </p>

      <p className="terms-text">
        Address: F868, VKIA Road No. 14, Jaipur, Rajasthan
      </p>

      <p className="terms-text">
        Thank you for choosing Gulabi Decor. We are committed to providing the
        best possible service and maintaining a professional relationship with
        our partners.
      </p>

      <style jsx>{`
        .terms-container {
          width: 100%;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .terms-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terms-effective-date {
          text-align: center;
          font-size: 1.125rem;
          color: #555;
          margin-bottom: 20px;
        }

        .terms-section-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .terms-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .terms-link {
          color: #1e90ff;
          text-decoration: none;
        }

        .terms-link:hover {
          text-decoration: underline;
        }

        .terms-info-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 10px;
        }

        .terms-info-list li {
          font-size: 1.125rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;
