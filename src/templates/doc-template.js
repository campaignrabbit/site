import React from 'react'
import rehypeReact from "rehype-react"
import PropTypes from "prop-types"
import {Link} from 'gatsby'
import {graphql} from 'gatsby'
import Layout from "../components/layout";
import styled from 'styled-components'
import Img from 'gatsby-image';
import PrevNext from '../components/prevnext';
import MetaTags from '../components/Metatags';
import Share from '../components/share';

import Container from "../components/container"
import Callout from '../components/callout'
import Highlight from '../components/highlight'
import Underline from '../components/underline'
import TitleLink from "../components/titleLink"
import LinkText from "../components/linkText"
import Gist from "../components/gist"
import Row from "../components/row"
import Col from "../components/column"
import Card from "../components/Card"

const PrimaryTitle = styled.h1`
    color: #f00;
    margin: 1em 0 0;
    font-weight: 600;
`
const SecondaryTitle = styled.h2`
    color: #ff0;
    margin: 1em 0 0;
    font-weight: 600;
`
const TertiaryTitle = styled.h3`
    color: #f0f;
    margin: 1em 0 0;
    font-weight: 600;
`

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        h1: PrimaryTitle,
        h2: SecondaryTitle,
        h3: TertiaryTitle,
        "call-out": Callout,
        highlight: Highlight,
        underline: Underline,
        "title-link": TitleLink,
        gist: Gist,
        "link-text": LinkText,
        row: Row,
        col: Col,
        card: Card,
    },
}).Compiler

function DocTemplate(props) {
    console.log(props);
    const url = props.data.site.siteMetadata.siteUrl;
    const thumbnail = props.data.markdownRemark.frontmatter.image &&
        props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src;
    const { title, image } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    const { category } = props.pageContext;
    const { edges, totalCount } = props.data.allMarkdownRemark;
    const categoryHeader = `List of post${
        totalCount === 1 ? "" : "s"
        } in ${category} (${totalCount})`

    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <Container className="docs-wrap" type='l'>
              <div className="aside-menu">4
                  <div className="card">
                      <div className="card-header">
                          <h3>{categoryHeader}</h3>
                      </div>
                      <div className="card_inner">
                          <ol className="card_links">
                              {edges.map(({ node }) => {
                                const { title, description } = node.frontmatter
                                const { slug } = node.fields
                                const { excerpt } = node.excerpt
                                return (
                                    <li key={slug} className={(props.pageContext.slug === slug ? 'active' : '')}>
                                        <Link to={slug}>{title}</Link>
                                    </li>
                                )
                              })}
                          </ol>
                          <div className="btn-container">
                            <Link to="/docs" className="btn btn-primary">Back to Docs</Link>
                          </div>
                        </div>
                    </div>
              </div>
              <div className="single-blog-post">
                    <div className="header">
                        <div className="image-section">
                            {image && <Img fluid={image.childImageSharp.fluid} />}
                        </div>
                        <h1>{title}</h1>
                    </div>
                    <div className="content">
                        { renderAst(props.data.markdownRemark.htmlAst) }
                    </div>
                    <div className="footer">
                        {title &&
                            <div>
                                <Share title={title} url={url} pathname={props.location.pathname} />
                                <PrevNext prev={prev && prev.node} next={next && next.node} />
                                <hr/>
                                <div className="text-right">
                                    <Link to="/docs">Go Back</Link>
                                </div>
                            </div>
                        }
                    </div>
              </div>
            </Container>
        </Layout>
    )
}

DocTemplate.propTypes = {
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

export default DocTemplate

export const docQuery = graphql`
  query DocsByPath($slug: String!, $category: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      frontmatter {
          title
          image
          author
          category
          date(formatString: "DD MMMM, YYYY")
      }
    }
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
    site {
        siteMetadata {
            siteUrl
          }
    }
  }
`
