import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'

const PrivacyPolicy = () => {
  return (
    <Layout>
    <StaticQuery
    query={PrivacypolicyQuery}
    render={data => {
      return (
        <Container type="s">
        <div className="legal-info">
          <Post
            title={data.markdownRemark.frontmatter.title}
            description={data.markdownRemark.frontmatter.description}
            keywords={[`email marketing tool privacy policy`, `ecommerce email marketing policies`, `campaignrabbit privacy policy`]}
            excerptData={data.markdownRemark.htmlAst}
            />
          </div>
          </Container>
    )
  }}
  />         
  </Layout>
    )
  }
const PrivacypolicyQuery = graphql`
 query PrivacypolicyQuery{
  markdownRemark(frontmatter: {path: {eq: "/privacy-policy"}}){
    htmlAst
    frontmatter{
      title
      description
      path
    }
  }
} 
`
export default PrivacyPolicy