import React from 'react'
import { Link } from 'gatsby'
import { FaPlay, FaTimes } from 'react-icons/fa';
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'



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
                            <div className="row text-center py-5">
                                <h1>We always ensure that we provide quality services & support to our customers.</h1>
                                <h2 className="mt-4">In order to continue doing so, we had to take a few hard decisions.</h2>
                                <h2 className="mt-4">We deeply regret to inform our beloved customers & users that we are discontinuing all our services related to Campaign Rabbit, effective from 17-01-2019.</h2>
                                <p className="mt-4">For further queries, get in touch with us via mail - <a mailto="support@campaignrabbit.com">support@campaignrabbit.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage
