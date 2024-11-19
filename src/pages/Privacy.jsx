import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-effective-date">Effective Date: [Insert Date]</p>

      <p className="privacy-text">
        At Gulabi Decor, your privacy is our priority. As a trusted name in the
        B2B home furnishings industry, we are committed to protecting the
        personal information you share with us and ensuring transparency about
        how we use your data.
      </p>

      <h2 className="privacy-section-title">1. Information We Collect</h2>
      <p className="privacy-text">
        We collect information to provide better services to our business
        partners, manufacturers, retailers, and users. The types of information
        we may collect include:
      </p>

      <h3 className="privacy-subsection-title">a. Personal Information</h3>
      <ul className="privacy-info-list">
        <li>
          Name, phone number, email address, and business details provided when
          you contact us or make an inquiry.
        </li>
        <li>Billing and shipping addresses when processing transactions.</li>
      </ul>

      <h3 className="privacy-subsection-title">b. Non-Personal Information</h3>
      <ul className="privacy-info-list">
        <li>
          Browsing data such as IP address, browser type, operating system, and
          pages visited on our website.
        </li>
        <li>Cookies to enhance user experience.</li>
      </ul>

      <h2 className="privacy-section-title">2. How We Use Your Information</h2>
      <p className="privacy-text">The information collected is used for:</p>
      <ul className="privacy-info-list">
        <li>Processing inquiries and facilitating partnerships.</li>
        <li>Providing product recommendations and updates on new offerings.</li>
        <li>Managing business relationships effectively.</li>
        <li>Complying with legal obligations.</li>
      </ul>

      <h2 className="privacy-section-title">3. Data Sharing and Security</h2>
      <h3 className="privacy-subsection-title">a. Data Sharing</h3>
      <p className="privacy-text">
        We value your trust and do not sell, rent, or lease your personal
        information to third parties. However, we may share information with:
      </p>
      <ul className="privacy-info-list">
        <li>Service providers and vendors assisting us in operations.</li>
        <li>Law enforcement or regulatory bodies as required by law.</li>
      </ul>

      <h3 className="privacy-subsection-title">b. Data Security</h3>
      <p className="privacy-text">
        We implement industry-standard measures to safeguard your information
        against unauthorized access, disclosure, or misuse. While no system is
        entirely secure, we take all reasonable steps to protect your data.
      </p>

      <h2 className="privacy-section-title">
        4. Cookies and Tracking Technologies
      </h2>
      <p className="privacy-text">
        Our website uses cookies to enhance your experience. Cookies help us
        understand user preferences, tailor content, and improve functionality.
        By using our website, you consent to the use of cookies as outlined in
        this policy.
      </p>

      <h2 className="privacy-section-title">5. Your Rights and Choices</h2>
      <p className="privacy-text">
        You have the following rights regarding your information:
      </p>
      <ul className="privacy-info-list">
        <li>Access: Request details of the information we hold about you.</li>
        <li>Correction: Rectify inaccurate or incomplete information.</li>
        <li>
          Erasure: Request the deletion of your personal information (subject to
          legal and operational requirements).
        </li>
        <li>Opt-Out: Unsubscribe from marketing communications at any time.</li>
      </ul>

      <p className="privacy-text">To exercise these rights, contact us at:</p>
      <p className="privacy-text">
        Email:{" "}
        <a href="mailto:GulabiDecor123@gmail.com" className="privacy-link">
          GulabiDecor123@gmail.com
        </a>
      </p>
      <p className="privacy-text">
        Phone:{" "}
        <a href="tel:+919828052001" className="privacy-link">
          +91 9828052001
        </a>
      </p>

      <h2 className="privacy-section-title">
        6. Changes to this Privacy Policy
      </h2>
      <p className="privacy-text">
        We reserve the right to update this Privacy Policy periodically to
        reflect changes in our business practices or legal requirements. The
        updated policy will be posted on our website with the revised effective
        date.
      </p>

      <h2 className="privacy-section-title">7. Contact Us</h2>
      <p className="privacy-text">
        If you have any questions or concerns about this Privacy Policy or how
        your information is handled, please reach out to us:
      </p>
      <p className="privacy-text">Address: F868, VKIA Road No. 14, Jaipur</p>
      <p className="privacy-text">
        Phone:{" "}
        <a href="tel:+919828052001" className="privacy-link">
          +91 9828052001
        </a>
      </p>
      <p className="privacy-text">
        Email:{" "}
        <a href="mailto:GulabiDecor123@gmail.com" className="privacy-link">
          GulabiDecor123@gmail.com
        </a>
      </p>

      <p className="privacy-text">
        Thank you for trusting Gulabi Decor. We are committed to ensuring your
        privacy and fostering strong, transparent relationships with our
        partners.
      </p>

      <style jsx>{`
        .privacy-policy-container {
          width: 100%;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .privacy-policy-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .privacy-effective-date {
          text-align: center;
          font-size: 1.125rem;
          color: #555;
          margin-bottom: 20px;
        }

        .privacy-section-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .privacy-subsection-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 15px;
          margin-bottom: 8px;
        }

        .privacy-info-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 10px;
        }

        .privacy-info-list li {
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .privacy-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .privacy-link {
          color: #1e90ff;
          text-decoration: none;
        }

        .privacy-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
