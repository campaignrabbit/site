import React from 'react'
import { Link } from 'gatsby'
import { FaPlay, FaTimes } from 'react-icons/fa';
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
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
                <MetaTags
                    title="Campaignrabbit - Email Marketing Automation for WooCommerce and Shopify"
                    description="Campaignrabbit is an eCommerce Marketing Automation platform to send personalised, data-driven emails and popups on autopilot. Try Campaignrabbit for FREE today!"
                    thumbnail={`${process.env.GATSBY_CR_MEDIA_URL}/images/campaignrabbit-og-image.jpg`}
                    url="https://wwww.campaignrabbit.com"
                    keywords="ecommerce marketing automation, ecommerce email automation, online store marketing tool, Shopify email followups, WooCommerce abandoned cart recovery software, campaignrabbit"
                />
                <div id="home" className="home home-top">
                    <div className="container">
                        <div className="hero-content wow fadeIn">
                            <div className="row">
                                <div className="col-sm-7">
                                    <h1>Sell more by sending personalised, highly relevant emails and popups</h1>
                                    <p>Campaignrabbit offers Email Marketing and Popups for growth-focused eCommerce businesses. <br /><span className="underline">Engage and convert visitors into customers smartly</span>
                                    </p>
                                    <SignUpForm user_mail_id={false}
                                      btnText="Get started for FREE" btnClass="btn-action" description="Join 1000+ businesses and put your marketing on autopilot today."
                                      note="No credit card required" />

                                </div>
                                <div className="col-sm-5">
                                    <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/campaignrabbit-flow-transparent-bg.png`} className="img-responsive" alt="Campaignrabbit flow image"/>
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
