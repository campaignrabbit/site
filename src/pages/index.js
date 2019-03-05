import React from 'react'
import { FaTimes, FaCheck, FaGift, FaDownload, FaFilter, FaDollarSign, FaPlay } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'

import bannerLogo from '../images/retainful-coupon-03.png'
import customerBanner from '../images/retainful-customers.png'
import customerView from '../images/home-icons/360-degree-view-of-customers.png';
import abandCart from '../images/home-icons/abandoned-cart-recovery.png';
import dragDrop from '../images/home-icons/drag-and-drop-visual-email-builder.png';
import followEmail from '../images/home-icons/follow-up-emails.png';
import productRec from '../images/home-icons/product-recommendations.png';
import winBack from '../images/home-icons/win-back-inactive-customers.png';
import betterSegmentation from '../images/better-segmentation-of-customers.png';
import automateEmail from '../images/automate-your-email-follow-up.png';
import reachAudience from '../images/reach-target-audience.png';
import PricingTable from '../components/pricing'

const IndexPage = () => (
    <Layout>
        <SEO title="Campaignrabbit - Sell more by sending data-driven emails to your customers"
             keywords={[`Send data-driven emails to your customers`]}/>

        <div className="home">
            <div className="container-m text-center">
                <div className="hero-content wow fadeIn">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Sell more by sending <span className="highlight">data-driven emails</span> <br/> to your customers</h1>
                            <p>Works with WooCommerce, J2Store & more</p>
                            <p>
                                <a className="btn-action btn-dark btn-lg"
                                  href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                                  target="_blank" rel="noopener noreferrer"> <FaPlay/> Watch Demo now <span>Quick overview</span></a>
                                <a className="btn-action btn-edge btn-lg"
                                    href="https://wordpress.org/plugins/retainful-next-order-coupon-for-woocommerce/"
                                    target="_blank" rel="noopener noreferrer">Try it for FREE <span>No cc required</span></a>
                            </p>
                        </div>
                        <div className="col-sm-2">

                        </div>
                    </div>

                </div>
                <div className="hero-img wow fadeIn">
                    <img className="img-fluid" src={bannerLogo} alt="retainful-coupon-banner"/>
                </div>
            </div>
        </div>
        <div className="hero-2">
            <div className="intro-block container-m text-center">
                <h3>Ready to scale your online business?</h3>
                <p>Boost your sale today</p>
                <div className="free-trial-form">
                    <form className="form-inline form-alt" method="post" action="https://www.campaignrabbit.com/">
                        <div className="form-group">
                            <input className="mail form-control" name="email" id="cf_email" size="50" maxlength="50" placeholder="Enter your email" type="text" />
                        </div>
                        <div className="form-group">
                            <button className="submit-button" value="" name="send" id="cf_send" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div id="intro" className="intro flex-split wow fadeIn">
            <div className="multi-step-container container-m">
                <div className="flex-intro align-center">
                    <div class="text-center">
                        <h3>Get started in Minutes</h3>
                    </div>
                    <div class="rl-multi-step numbered">
                        <ul class="rl-multi-step-list">
                            <li class="rl-multi-step-item active">
                            <div class="rl-item-wrap">
                            <p class="rl-item-title">Connect your store</p>

                            </div></li>
                            <li class="rl-multi-step-item active">
                            <div class="rl-item-wrap">
                            <p class="rl-item-title">Create Campaigns</p>

                            </div></li>
                            <li class="rl-multi-step-item active">
                            <div class="rl-item-wrap">
                            <p class="rl-item-title">Turn on Autopilot</p>

                            </div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="features" className="features wow fadeInDown">
            <div className="container-m">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="features-intro">
                            <h2>
                                Running <span className="highlight">email campaigns</span> <br className="hidden-xs"/>is made easier than ever with it
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={abandCart} alt="Abandoned Cart Recovery"/>
                                <h3>Abandoned Cart Recovery</h3>
                                <p>Remind customers who have abandoned thier cart with automatic emails at <span className="highlight">set intervals and recover them.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={followEmail} alt="Abandoned Cart Recovery"/>
                                <h3>Follow-up Emails</h3>
                                <p>Automatically send email follow-ups to your customers. You can ask them for a feedback, a review, or just say hello</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={winBack} alt="Abandoned Cart Recovery"/>
                                <h3>Win-back Inactive Customers</h3>
                                <p>Bring back inactive customers with special offers through automated email campaigns</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={productRec} alt="Abandoned Cart Recovery"/>
                                <h3>Product recommendations</h3>
                                <p>Recommend “Socks” to customers when they purchase “shoes”. Start automatically sending relevant product recommendations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={customerView} alt="Abandoned Cart Recovery"/>
                                <h3>360 degree view of customers</h3>
                                <p>Get valuable insights about your customers. Learn what days they usually place orders, time of order, total value of orders and more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="feature-list">
                            <div className="card-text">
                                <img className="img-responsive" src={dragDrop} alt="Abandoned Cart Recovery"/>
                                <h3>Drag and drop visual email builder</h3>
                                <p>Create beautiful emails with our intutive drag-and-drop visual email builder. Use short codes to add dynamic data like their names.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="yd-ft wow fadeIn">
            <div className="container-m">
                <div className="text-center">
                    <h2>What you can do with CampaignRabbit</h2>
                </div>
                <div className="yd-ft-inner">
                    <div className="yd-ft-left">
                        <h3>Better Segmentation of Customers</h3>
                        <p>Easily create segments of your contacts based on data – total spending, location, behaviour and more. Campaignrabbit provides powerful segmentation of your customers. Say goodbye to spreadsheets and static reporting tools. Get more insight on your customers.
                        </p>
                        /*<a href="https://app.retainful.com/" className="btn-action btn-edge" target="_blank"
                           rel="noopener noreferrer">See more</a>*/
                    </div>
                    <div className="yd-ft-right">
                        <img src={betterSegmentation} alt="retainful-customers"/>
                    </div>
                </div>
                <hr/>
                <div className="yd-ft-inner">
                    <div className="yd-ft-right">
                        <img src={automateEmail} alt="retainful-customers"/>
                    </div>
                    <div className="yd-ft-left">
                        <h3>Automate your email follow-ups</h3>
                        <p>With the pre-built, ready-to-go templates, send personalised emails to your customers automatically. Once the email flow is created, the system will take care of sending beautiful, responsive emails to your customers.
                        <br/> Use Campaignrabbit’s drag and drop visual email builder to build stunning emails and impress your customers
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="yd-ft-inner">
                    <div className="yd-ft-left">
                        <h3>Reach Target Audience</h3>
                        <p>Email campaigns are all about reaching your target customers. Stop sending generic emails to your entire customer list. Generic emails have a very low conversion rate of less than 2%. <br/> And you don’t want your brand to be remembered as a spammer. Send targeted, personalised messages that does not look like a promotion, but encourages an active engagement with your business.
                        </p>
                    </div>
                    <div className="yd-ft-right">
                        <img src={reachAudience} alt="retainful-customers"/>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
);

export default IndexPage
