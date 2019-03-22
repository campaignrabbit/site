import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../components/LandingPage';
import CenterBlock from '../components/CenterBlock';
import SEO from '../components/seo';
import Container from '../components/container';
import Layout from '../components/layout';
import ShopifyContext from '../constants/landingPageContextShopify';
import SignUpForm from '../components/SignUpForm';
import HomeIntegrations from '../constants/homeIntegrations';
import { FaDollarSign, FaHeadphones, FaCheck, FaCartArrowDown, FaThumbsUp, FaShieldAlt } from 'react-icons/fa';

const LandingPageTemplate = props => {
  return (
    <Layout>
      <SEO
          title="Shopify"
          description="Shopify"
      />
      <SignUpForm title="Smart email marketing for Shopify stores"
        description="Save time. Save money. Start doing effective Shopify email marketing easily." user_mail_id={false} className="landing-page-calltoaction" note="14-day free trial. No credit card required." btnText="Start my free trial" />
      <Container className="landing-page-container">
        <LandingPage callouts={ShopifyContext} />

        <div class="guarantee-block">
          <div className="row">
            <div className="col-sm-5">
              <h3>What you Get?</h3>
            </div>
            <div className="col-sm-7">
              <ul>
                <li><span class="box-icon"><FaDollarSign/></span> 14-Day Money Back Guarantee</li>
                <li><span class="box-icon"><FaHeadphones/></span> 1 Year Complete Technical Support</li>
                <li><span class="box-icon"><FaCheck/></span> Latest WooCommerce Version Tested</li>
                <li><span class="box-icon"><FaCartArrowDown/></span> 30% discount on license renewal</li>
                <li><span class="box-icon"><FaThumbsUp/></span> Safe and Secure checkout</li>
                <li><span class="box-icon"><FaShieldAlt/></span> Trusted by more than 10000 store owners</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <HomeIntegrations/>
      <SignUpForm title="Ready to connect with your customers at every step of their customer’s journey?"
        description="Free 14-day trial with 24/7 support. No credit card required." user_mail_id={false} className="landing-page-calltoaction bottom" note="" btnText="Start my free trial" />

    </Layout>
  );
};

export default LandingPageTemplate;
