import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PricingTable from '../components/pricing'

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <div className="container-m text-center">
        <div className="pricing-intro wow fadeInDown">
        <h3>Simple, transparent pricing.</h3>

            <h1>Pay as you Grow</h1>
            <p>Estimate your monthly cost based on your customers. <br/>
    Get started now and pick your plan later.</p>
        </div>
        </div>
    <PricingTable/>
  </Layout>
)

export default PricingPage
