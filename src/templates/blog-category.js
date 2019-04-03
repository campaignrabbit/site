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
                    <Container>
                        <h2>{categoryHeader}</h2>
                    </Container>
                </div>

                <Container type="s">
                    <div className="blog-list-container">
                        {edges.map(({ node }) => {
                            const { title, description, image, author, date } = node.frontmatter
                            const { slug } = node.fields
                            const { excerpt } = node.excerpt
                            return (
                              <div className="blog-post" key={slug}>
                                  <div className="image-section">
                                      <Link to={slug}>
                                          { image &&
                                          <img src={image} alt={title} />
                                          }
                                      </Link>
                                  </div>
                                  <div className="content-section">
                                      <h3><Link to={slug}>{title}</Link></h3>
                                      <p>
                                          <small>Posted by {author} on {date} in {category}</small>
                                      </p>
                                      <p>
                                          {description}
                                      </p>
                                      <Link to={slug}>Read more</Link>
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
      filter: { frontmatter: { category: { eq: $category } }, fileAbsolutePath: { regex: "/blog/" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            category
            image
            author
            date(formatString: "DD MMMM, YYYY")
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
