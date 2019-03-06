import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FeaturesPage = () => (
  <Layout>
    <SEO title="Features" />
    <div className="features-banner-container container-m">
        <div className="features-header-banner text-center">
    		<h2>Try CampaignRabbit For <span className="title-highlight">Free!</span></h2>
            <p>Who says the best things can’t be used for free? Use CampaignRabbit free of cost for 30 days and tell us how you love it!“</p>
            <div className="free-trial-form">
                <form className="form-inline" method="post" action="https://www.campaignrabbit.com/features/">
                    <div className="form-group">
                        <input className="form-control" name="email" id="cf_email" size="50" maxlength="50" value="" placeholder="Enter your email" type="text"/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" value="Sign Up" name="send" id="cf_send" type="submit"/>
                    </div>
                </form>
            </div>
    	</div>
	</div>
    <div className="features-services-box-container">
        
    </div>
  </Layout>
)

export default FeaturesPage
