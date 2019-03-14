import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../components/LandingPage';
import MetaTags from '../components/Metatags';
import styled from "styled-components";


const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
`;

const Image = styled.img`
  display: block;
`;

const Content = styled.div`
  display: block;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";

  & > ${Image}, &:nth-of-type(even) > ${Content} {
    grid-area: left;
  }

  & > ${Content}, &:nth-of-type(even) > ${Image} {
    grid-area: right;
  }
`;


const LandingPageTemplate = props => {
  console.log(props);
  const url = props.data.site.siteMetadata.siteUrl;

  return (
    <Layout>
        <LandingPage />
        <Inner>
          {Array(10)
            .fill("")
            .map((_, i) => (
              <Box>
                <Image src="https://via.placeholder.com/100x100" />
                <Content>{`item ${i}`}</Content>
              </Box>
            ))}
        </Inner>
    </Layout>
  );
};

export default LandingPageTemplate;

export const query = graphql`
  query($handle: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;
