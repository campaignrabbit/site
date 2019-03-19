import React from 'react'
import { Link } from 'gatsby'
import { FaPlay, FaTimes } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'
import SignUpForm from '../components/SignUpForm'

//sections
import HomeSteps from '../constants/homeSteps';
import HomeFeatures from '../constants/homeFeatures';
import HomeTabs from '../constants/homeTabs';
import HomeServices from '../constants/homeServices';
import HomeReviews from '../constants/homeReviews';
import HomeIntegrations from '../constants/homeIntegrations';


class IndexPage extends React.Component {
    render(){
        return (
            <Layout>
                <SEO title="Campaignrabbit - E-Commerce Marketing Automation for WooCommerce and Shopify"
                     keywords={['ecommerce marketing','marketing automation', 'email marketing', 'WooCommerce Email Marketing', 'Shopify Email Marketing']}/>

                <div id="home" className="home">
                    <div className="container-m text-center">
                        <div className="hero-content wow fadeIn">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1>Sell more by sending <span className="highlight">personalised, highly relevant emails</span> and  <span className="highlight">on-site messages</span></h1>
                                    <p>Campaignrabbit offers tools to <span className="underline">engage and convert visitors into customers smartly</span> for growth-focused eCommerce businesses.
                                        </p>
                                    <SignUpForm user_mail_id={false}
                                      btnText="Get started for FREE" btnClass="btn-action" description="Join 1000+ businesses and put your marketing on autopilot today."
                                      note="No credit card required" />

                                </div>
                                <div className="col-sm-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeTabs/>

                <HomeServices/>

                <HomeFeatures/>

                <HomeIntegrations/>

                <div className="home bottom">
                    <div className="container-m text-center">
                        <SignUpForm className="hero-content wow fadeIn" title="Start Selling More Today" user_mail_id={true}
                          btnText="Sign Up for free" description="Join 1000+ growth-focussed eCommerce brands and start driving more sales" />
                    </div>
                </div>

            </Layout>
        )
    }
}

export default IndexPage
