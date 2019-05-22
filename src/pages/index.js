import React from 'react'
import { Link } from 'gatsby'
import { FaPlay, FaTimes } from 'react-icons/fa';
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import HomeBanner from '../constants/homeBanner'
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
                                <div className="col-md-6 col-lg-5">
                                    <h1>All-in-one<br/> eCommerce Automation</h1>
                                </div>
                                <div className="col-md-6">
                                    <p>Automate Email Campaigns, Triggered PopUps, Recover Cart Abandonment - in one place.
                                    </p>
                                    <SignUpForm user_mail_id={true}
                                                btnText="Get started" btnClass="btn-action" note="For Shopify & WooCommerce Entrepreneurs." />
                                    {/*<img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/campaignrabbit-flow-transparent-bg.png`} className="img-responsive" alt="Campaignrabbit flow image"/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="home-tabs-container">
                            <HomeBanner/>
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
