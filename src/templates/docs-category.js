import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import Container from "../components/container";
import MetaTags from '../components/Metatags'
// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoryHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } in category: ${category}`

    return (
        <Layout>
          <MetaTags
              title={category}
              description={categoryHeader}
          />
            <div className="category-container">
                <div className="category-header">
                    <Container type="s">
                        <h2>{categoryHeader}</h2>
                    </Container>
                </div>
                <Container type="s">
                    <div className="row category-list">
                        {edges.map(({ node }) => {
                          const { title, description } = node.frontmatter
                          const { slug } = node.fields
                          const { excerpt } = node.excerpt
                          return (
                            <div className="col-sm-6" key={slug}>
                                <div className="card card-category">
                                    <div className="card_inner">
                                        <div className="card_links">
                                          <h4><Link to={slug}>{title}</Link></h4>
                                          <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )
                        })}
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

Category.propTypes = {
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            path: PropTypes.string.isRequired,
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } }, fileAbsolutePath: { regex: "/docs/" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            category
          }
          fields{
             slug
          }
          excerpt
        }
      }
    }
  }
`
