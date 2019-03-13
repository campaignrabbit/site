import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";
import Container from "../components/container";
import withSubNav from '../components/NavSub';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const BlogPage = ({ pageContext}) => {
  console.log(pageContext);
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  const previousUrl = index - 1 == 1 ? pathPrefix : pathPrefix + '/'+(index - 1).toString()
  const nextUrl = pathPrefix + '/'+(index + 1).toString()

  console.log(previousUrl);
  console.log(nextUrl);

    return (
        <Layout>
            {/*<Breadcrumb>*/}
                {/*<h2>Blog</h2>*/}
            {/*</Breadcrumb>*/}
            <SEO title="Blog" />
            <div className="blog-list-container">
                <Container type="s">
                    { group.map(post => (
                        <div className="blog-post" key={post.node.fields.slug}>
                            <div className="image-section">
                                <Link to={post.node.fields.slug}>
                                    { post.node.frontmatter.image &&
                                    <img src={post.node.frontmatter.image} alt={post.node.frontmatter.title} />
                                    }
                                </Link>
                            </div>
                            <div className="content-section">
                                <h3><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h3>
                                <p>
                                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} in
                                        <Link to={'blog/category/'+ post.node.frontmatter.category}> {post.node.frontmatter.category}</Link></small>
                                </p>
                                <p>
                                    {post.node.excerpt}
                                </p>
                                <Link to={post.node.fields.slug}>Read more</Link>
                            </div>
                        </div>
                    )) }

                    <div className="pagination-links">
                      <div className="previousLink">
                        <NavLink test={first} url={previousUrl} text="← Previous Posts" />
                      </div>
                      <div className="nextLink">
                        <NavLink test={last} url={nextUrl} text="Next Posts →" />
                      </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export const PostQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
            sort: {fields: [frontmatter___date], order: DESC}, limit: 10
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        author
                        image
                        category
                    }
                    excerpt
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default BlogPage
