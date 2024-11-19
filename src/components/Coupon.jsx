import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// Styled Components for Minimalist Design
const CouponSectionWrapper = styled.div`
  background-color: #fff; /* Clean white background */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 40px 20px;
  max-width: 600px;
  margin: 50px auto;
  font-family: 'Proxima Nova', sans-serif;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333; /* Dark gray for a modern look */
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666; /* Medium gray for a subtle tone */
  margin: 0;
`;

const CouponContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 25px 0;
`;

const CouponCard = styled(motion.div)`
  background-color: #f9f9f9; /* Soft gray background for cards */
  border-radius: 6px;
  padding: 15px;
  text-align: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CouponCode = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #6B3F4F;
  margin: 0 0 5px;
`;

const CouponDetails = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

const SubscribeSection = styled.div`
  border-top: 1px solid #eaeaea;
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const SubscribeButton = styled(motion.button)`
  background-color: #6B3F4F;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: Beige;
    color: Black;
  }
`;

const CouponSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Subscribed with email: ${data.email}`);
  };

  return (
    <CouponSectionWrapper>
      <Header>
        <Title>Upcoming Promotions</Title>
        <Description>Sign up to be notified about exclusive deals and upcoming sales.</Description>
      </Header>
      <CouponContainer>
        <CouponCard whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <CouponCode>SAVE20</CouponCode>
          <CouponDetails>Get 20% off on orders over $100</CouponDetails>
        </CouponCard>
        <CouponCard whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <CouponCode>FREESHIP</CouponCode>
          <CouponDetails>Enjoy free shipping on orders above $50</CouponDetails>
        </CouponCard>
      </CouponContainer>
      <SubscribeSection>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flex: 1, gap: '10px' }}>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required", pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
          />
          <SubscribeButton type="submit" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Subscribe
          </SubscribeButton>
        </form>
        {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
      </SubscribeSection>
    </CouponSectionWrapper>
  );
};

export default CouponSection;
