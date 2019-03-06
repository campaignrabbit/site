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
    <div className="calcuate-pricing-plan container">
        <h4>How many customers does your store have?</h4>
        <div className="customer-select-box">
            <select id="customer-count-select">
                <option value="100">0 - 100</option>
                <option value="2000">100 - 2000</option>
                <option value="5000">2000 - 5000</option>
                <option value="10000">5000 - 10000</option>
                <option value="25000">10000 - 25000</option>
                <option value="26000">Above 25000</option>
            </select>
        </div>
        <h4>Campaignrabbit will cost you:</h4>
        <div className="price-value-box">
            Monthly
            <div id="monthprice" className="price">Free</div>
        </div>
    </div>
    <PricingTable/>
  </Layout>
)

export default PricingPage
