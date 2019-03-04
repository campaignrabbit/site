import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FeaturesPage = () => (
  <Layout>
    <SEO title="Features" />
    <h1>Features Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FeaturesPage
