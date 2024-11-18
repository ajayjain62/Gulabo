import React from "react";

const ReturnAndRefundPolicy = () => {
  return (
    <div className="return-refund-container">
      <h1 className="return-refund-title">Return and Refund Policy</h1>
      <p className="return-refund-effective-date">Effective Date: [Insert Date]</p>

      <p className="return-refund-text">
        At Gulabi Decor, we strive to provide high-quality products and services.
        If you are not completely satisfied with your purchase, please review our
        return and refund policy below.
      </p>

      <h2 className="return-refund-section-title">1. Returns</h2>
      <p className="return-refund-text">
        Our return policy allows you to return most items within 15 days of the
        date of delivery. The product must be unused, undamaged, and in the
        original packaging to be eligible for a return.
      </p>

      <h2 className="return-refund-section-title">2. Non-Returnable Items</h2>
      <p className="return-refund-text">
        The following items are non-returnable:
      </p>
      <ul className="return-refund-info-list">
        <li>Customized or personalized products.</li>
        <li>Products that have been used, damaged, or altered.</li>
        <li>Sale items or items marked as non-returnable at the time of purchase.</li>
      </ul>

      <h2 className="return-refund-section-title">3. Refunds</h2>
      <p className="return-refund-text">
        Once we receive the returned item, we will inspect it and notify you of
        the approval or rejection of your refund. If approved, the refund will be
        processed, and a credit will automatically be applied to your original method
        of payment within 7-10 business days.
      </p>

      <h2 className="return-refund-section-title">4. Exchanges</h2>
      <p className="return-refund-text">
        If you would like to exchange your item for a different size or color, we
        will gladly assist you. Please follow the return process to initiate the
        exchange.
      </p>

      <h2 className="return-refund-section-title">5. Return Shipping Costs</h2>
      <p className="return-refund-text">
        The cost of return shipping will be borne by the customer, unless the item
        is defective or damaged. In such cases, we will provide a prepaid return
        shipping label.
      </p>

      <h2 className="return-refund-section-title">6. How to Return an Item</h2>
      <p className="return-refund-text">
        To return an item, please contact us at the following email address:
      </p>
      <p className="return-refund-text">
        Email: <a href="mailto:GulabiDecor123@gmail.com" className="return-refund-link">GulabiDecor123@gmail.com</a>
      </p>
      <p className="return-refund-text">
        Once your return request is approved, we will provide you with instructions
        for returning the item.
      </p>

      <h2 className="return-refund-section-title">7. Damaged or Defective Items</h2>
      <p className="return-refund-text">
        If you receive a damaged or defective item, please contact us within 48 hours
        of receiving the product. We will arrange for a replacement or a refund.
      </p>

      <h2 className="return-refund-section-title">8. Late or Missing Refunds</h2>
      <p className="return-refund-text">
        If you haven’t received a refund yet, please check your bank account and
        contact your credit card company. It may take some time before your refund is
        officially posted. If you’ve done all of this and you still have not received
        your refund, please contact us at:
      </p>
      <p className="return-refund-text">
        Email: <a href="mailto:GulabiDecor123@gmail.com" className="return-refund-link">GulabiDecor123@gmail.com</a>
      </p>

      <h2 className="return-refund-section-title">9. Changes to this Policy</h2>
      <p className="return-refund-text">
        We reserve the right to modify or update this Return and Refund Policy at
        any time. The updated policy will be posted on our website, and the effective
        date will be revised accordingly.
      </p>

      <h2 className="return-refund-section-title">10. Contact Us</h2>
      <p className="return-refund-text">
        If you have any questions about our Return and Refund Policy or need
        assistance, please contact us:
      </p>
      <p className="return-refund-text">
        Email: <a href="mailto:GulabiDecor123@gmail.com" className="return-refund-link">GulabiDecor123@gmail.com</a>
      </p>
      <p className="return-refund-text">
        Phone: <a href="tel:+919828052001" className="return-refund-link">+91 9828052001</a>
      </p>

      <p className="return-refund-text">
        Address: F868, VKIA Road No. 14, Jaipur, Rajasthan
      </p>

      <style jsx>{`
        .return-refund-container {
          width: 100%;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .return-refund-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .return-refund-effective-date {
          text-align: center;
          font-size: 1.125rem;
          color: #555;
          margin-bottom: 20px;
        }

        .return-refund-section-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .return-refund-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .return-refund-link {
          color: #1e90ff;
          text-decoration: none;
        }

        .return-refund-link:hover {
          text-decoration: underline;
        }

        .return-refund-info-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 10px;
        }

        .return-refund-info-list li {
          font-size: 1.125rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

export default ReturnAndRefundPolicy;
