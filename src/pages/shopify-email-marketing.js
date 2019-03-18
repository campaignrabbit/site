import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../components/LandingPage';
import CenterBlock from '../components/CenterBlock';
import SEO from '../components/seo';
import Container from '../components/container';
import Layout from '../components/layout';
import ShopifyContext from '../constants/landingPageContextShopify';
import SignUpForm from '../components/SignUpForm';

const LandingPageTemplate = props => {
  return (
    <Layout>
      <SEO
          title="Shopify"
          description="Shopify"
      />
      <Container>
        <SignUpForm title="Smart email marketing for Shopify stores"
          description="Save time. Save money. Start doing effective Shopify email marketing easily." user_mail_id={false} className="landing-page-calltoaction" note="14-day free trial. No credit card required." btnText="Start my free trial" />
        <LandingPage callouts={ShopifyContext} />
        <SignUpForm title="Ready to connect with your customers at every step of their customer’s journey?"
          description="Free 14-day trial with 24/7 support. No credit card required." user_mail_id={false} className="landing-page-calltoaction" note="" btnText="Start my free trial" />
      </Container>
    </Layout>
  );
};

export default LandingPageTemplate;
