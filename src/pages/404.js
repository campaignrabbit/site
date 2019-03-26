import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Uh oh! We could not locate the page you are looking for!</h1>
      <p>You may want to head back to the home page</p>
      <p><a class="btn btn-primary" href="/">Take me home</a></p>
  </Layout>
)

export default NotFoundPage
