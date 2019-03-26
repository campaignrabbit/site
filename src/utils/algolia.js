const docsQuery = `{
  docs: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
        }
        fields{
           slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
      frontmatter: {purpose: {eq: "page"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
        }
        fields{
           slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/blog/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          tags
        }
        fields{
           slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => flatten(data.docs.edges),
    indexName: `Docs`,
    settings,
  }
]

module.exports = queries
