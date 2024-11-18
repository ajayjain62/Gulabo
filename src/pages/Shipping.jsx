import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-container">
      <h1 className="shipping-policy-title">Shipping Policy</h1>
      <p className="shipping-policy-effective-date">Effective Date: [Insert Date]</p>

      <p className="shipping-policy-text">
        At Gulabi Decor, we aim to provide a smooth and timely delivery of our products.
        Please review the shipping details below to understand our processes.
      </p>

      <h2 className="shipping-policy-section-title">1. Shipping Destinations</h2>
      <p className="shipping-policy-text">
        We currently offer shipping across India and internationally. If you are located
        outside of India, please contact us for shipping rates and availability.
      </p>

      <h2 className="shipping-policy-section-title">2. Processing Time</h2>
      <p className="shipping-policy-text">
        Orders are processed within 1-2 business days. Please note that processing time
        may vary during peak seasons or due to product availability. Once your order is
        processed, you will receive a shipping confirmation email with tracking information.
      </p>

      <h2 className="shipping-policy-section-title">3. Shipping Costs</h2>
      <p className="shipping-policy-text">
        Shipping costs depend on the delivery address and the weight of the items
        in your order. The exact cost will be calculated at checkout. You may also
        be notified of any additional fees related to international shipping.
      </p>

      <h2 className="shipping-policy-section-title">4. Shipping Methods</h2>
      <p className="shipping-policy-text">
        We offer the following shipping methods:
      </p>
      <ul className="shipping-policy-info-list">
        <li>Standard Shipping (5-7 business days for domestic deliveries).</li>
        <li>Express Shipping (2-3 business days for domestic deliveries).</li>
        <li>International Shipping (varies by country, usually 7-14 business days).</li>
      </ul>

      <h2 className="shipping-policy-section-title">5. Tracking Your Order</h2>
      <p className="shipping-policy-text">
        Once your order has shipped, you will receive a shipping confirmation email with
        a tracking number. You can use this tracking number to check the status of your shipment
        on the carrier's website.
      </p>

      <h2 className="shipping-policy-section-title">6. Delivery Issues</h2>
      <p className="shipping-policy-text">
        If you experience any issues with delivery, such as a delayed shipment or a lost
        package, please contact us immediately. We will work with the shipping carrier to resolve
        the issue and ensure that your order reaches you.
      </p>

      <h2 className="shipping-policy-section-title">7. Shipping Restrictions</h2>
      <p className="shipping-policy-text">
        Some products may be subject to shipping restrictions due to their size, weight,
        or destination. If a product is restricted from being shipped to your location, we
        will inform you prior to processing the order.
      </p>

      <h2 className="shipping-policy-section-title">8. International Shipping</h2>
      <p className="shipping-policy-text">
        For international orders, please note that customs duties and taxes may apply.
        These charges are the responsibility of the customer and will vary based on your
        location. We recommend checking with your local customs office for more information.
      </p>

      <h2 className="shipping-policy-section-title">9. Changes to Shipping Policy</h2>
      <p className="shipping-policy-text">
        We reserve the right to update or modify this Shipping Policy at any time. Any
        changes will be posted on this page with the revised effective date.
      </p>

      <h2 className="shipping-policy-section-title">10. Contact Us</h2>
      <p className="shipping-policy-text">
        If you have any questions about our shipping policy or need assistance with your order,
        please feel free to contact us:
      </p>
      <p className="shipping-policy-text">
        Email: <a href="mailto:GulabiDecor123@gmail.com" className="shipping-policy-link">GulabiDecor123@gmail.com</a>
      </p>
      <p className="shipping-policy-text">
        Phone: <a href="tel:+919828052001" className="shipping-policy-link">+91 9828052001</a>
      </p>
      <p className="shipping-policy-text">
        Address: F868, VKIA Road No. 14, Jaipur, Rajasthan
      </p>

      <style jsx>{`
        .shipping-policy-container {
          width: 100%;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .shipping-policy-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .shipping-policy-effective-date {
          text-align: center;
          font-size: 1.125rem;
          color: #555;
          margin-bottom: 20px;
        }

        .shipping-policy-section-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .shipping-policy-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .shipping-policy-link {
          color: #1e90ff;
          text-decoration: none;
        }

        .shipping-policy-link:hover {
          text-decoration: underline;
        }

        .shipping-policy-info-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 10px;
        }

        .shipping-policy-info-list li {
          font-size: 1.125rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

export default ShippingPolicy;
