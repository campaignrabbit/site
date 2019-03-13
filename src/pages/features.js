import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'

import recovery from '../images/features/abandoned-cart-recovery-2.png';
import follow from '../images/features/follow-up-emails-2.png';
import recommend from '../images/features/product-recommendations-2.png';
import customers from '../images/features/win-back-inactive-customers-2.png';
import visualEmail from '../images/features/Drag-and-drop-visual-email-builder.png';
import degree from '../images/features/360-degree-view-of-customers-2.png';
import responsive from '../images/features/Bulletproof-responsive-emails.png';
import integrate from '../images/features/supports-your-favourite-ecommerce-platform–woocommerce.png';
import segment from '../images/features/powerful-segmentation-2.png';

class FeaturesPage extends React.Component {
    componentDidMount () {
        $("#cf_send").click(function() {
            var email = $("#cf_email").val();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $("#returnmessage").empty();
            if (email == '') {
                $("#returnmessage").html("Please Fill Required Field");
            } else if( !re.test(email) ) {
                $("#returnmessage").html("Please enter valid email");
            } else {
                window.location="https://app.campaignrabbit.com/register?email=" + email;
            }
        });
        $("#cf_send1").click(function() {
            var email = $("#cf_email1").val();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $("#returnmessage2").empty();
            if (email == '') {
                $("#returnmessage2").html("Please Fill Required Field");
            } else if( !re.test(email) ) {
                $("#returnmessage2").html("Please enter valid email");
            } else {
                window.location="https://app.campaignrabbit.com/register?email=" + email;
            }
        });
    }
    render() {
        return (
          <Layout>
            <SEO title="Features" />
            <div className="features-banner-container">
                <div className="features-header-banner text-center">
                    <div className="container-m">
                		<h2>Try CampaignRabbit For <span className="title-highlight">Free!</span></h2>
                        <p>Who says the best things can’t be used for free? Use CampaignRabbit free of cost for 30 days and tell us how you love it!“</p>
                        <div className="free-trial-form">
                            <form className="form-inline form-alt" id="signup-form">
                                <div className="form-group flex-70">
                                    <input className="mail form-control" name="email" id="cf_email" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                                </div>
                                <div className="form-group flex-30">

                                    <input type="button" id="submit" className="submit-button"  id="cf_send" value="Sign Up"/>
                                </div>
                                <p id="returnmessage" className="returnmessage"></p>
                            </form>
                            <p>Get started for free. No credit card required.</p>
                        </div>
                    </div>
            	</div>
                <div className="features-services-box-container">
                    <div className="container">
                        <div className="service-box-row text-center">
                            <h2><span className="title-highlight">Email Campaign</span> features more details</h2>
                            <p>CampaignRabbit works with all popular eCommerce platforms including WooCommerce, Shopify, Magento, Prestashop and a lot more.</p>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Abandoned Cart Recovery</h2>
                                    <p>Remind customers who have abandoned thier cart with automatic emails at set intervals and recover them</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={follow} alt="Follow-up Emails"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Follow-up Emails</h2>
                                    <p>Automatically send email follow-ups to your customers. You can ask them for a feedback, a review, or just say hello</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Win-back Inactive Customers</h2>
                                    <p>Bring back inactive customers with special offers through automated email campaigns.</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={customers} alt="Win-Back inactive customers"/>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={recommend} alt="Product recommendation"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Product recommendations</h2>
                                    <p>Recommend “Socks” to customers when they purchase “shoes”. Start automatically sending relevant product recommendations</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>360 degree view of customers</h2>
                                    <p>Get valuable insights about your customers. Learn what days they usually place orders, time of order, total value of orders and more</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={degree} alt="Customer in-depth Analytics"/>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={visualEmail} alt="WYSIWYG Email builder"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Drag and drop visual email builder</h2>
                                    <p>Create beautiful emails with our intuitive drag-and-drop visual email builder. Use short codes to add dynamic data like their names.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Bulletproof responsive emails</h2>
                                    <p>We use MJML framework to build responsive emails that look responsive and beautiful in all email clients including Outlook</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={responsive} alt="Bulletproof responsive emails"/>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img src={integrate} className="img-responsive" alt="Popular integrations"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Supports your favourite eCommerce platform – WooCommerce</h2>
                                    <p>Campaignrabbit works beautifully with WooCommerce. Synchronise orders and customers seamlessly. Just download and install the WooCommerce plugin for Campaignrabbit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-box-row row">
                            <div className="col-sm-6">
                                <div className="service-box-content">
                                    <h2>Powerful Segmentation</h2>
                                    <p>Segment your customers based on their order history, total spending, purchase behaviour, products bought, abandoned carts, location and more.</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box-image">
                                    <img className="img-responsive" src={segment} alt="Bulletproof responsive emails"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-2 bottom">
                    <div className="intro-block container-m text-center">
                        <h3>Get started for free today</h3>
                        <p>Boost your sale today</p>
                        <div className="free-trial-form">
                            <form className="form" id="signup-form1">
                                <div className="form-alt">
                                  <div className="form-group flex-70">
                                      <input className="mail form-control" name="email" id="cf_email1" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                                  </div>
                                  <div className="form-group flex-30">

                                      <input type="button" id="submit" className="submit-button"  id="cf_send1" value="Sign Up for Free"/>
                                  </div>
                                </div>
                                <p id="returnmessage2" className="returnmessage"></p>
                            </form>
                            <p>Get started for free. No credit card required.</p>
                        </div>
                    </div>
                </div>
        	</div>
          </Layout>
        )
    }
}

export default FeaturesPage
