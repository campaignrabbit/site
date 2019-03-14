import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../components/LandingPage';
import SEO from '../components/seo';
import Container from '../components/container';
import Layout from '../components/layout';


const LandingPageTemplate = props => {
  return (
    <Layout>
      <SEO
          title="Shopify"
          description="Shopify"
      />
      <Container>
        <LandingPage center="" />
      </Container>
    </Layout>
  );
};

export default LandingPageTemplate;
