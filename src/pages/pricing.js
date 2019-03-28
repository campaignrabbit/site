import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'

class PricingPage extends React.Component {
    componentDidMount () {
        $('#customer-count-select').change(function () {
            var chosenPrice = $(this).val();
            var x = document.getElementById("monthprice");
            // var y = document.getElementById("yearprice");
            switch (chosenPrice) {
                case '100':
                    x.innerHTML = "Free";
                    $('.price-title').show();
                    $('.price-sub').show();
                    // y.innerHTML = "0";
                    break;
                case '2000':
                    x.innerHTML = "$14";
                    $('.price-title').show();
                    $('.price-sub').show();
                    // y.innerHTML = "$ 168";
                    break;
                case '5000':
                    x.innerHTML = "$29";
                    $('.price-title').show();
                    $('.price-sub').show();
                    // y.innerHTML = "$ 348";
                    break;
                case '10000':
                    x.innerHTML = "$49";
                    $('.price-title').show();
                    $('.price-sub').show();
                    // y.innerHTML = "$ 588";
                    break;
                case '25000':
                    x.innerHTML = "$69";
                    $('.price-title').show();
                    $('.price-sub').show();
                    // y.innerHTML = "$ 828";
                    break;
                case '26000':
                    x.innerHTML = `<span class="pricing-percent">Having more than 25,000+ customers <br/>
                        <a class="pricing-link btn btn-primary" href="https://www.campaignrabbit.com/contact-us/">Contact us</a>
                        <br/> For info and pricing, contact us at <a href="mailto:sales@campaignrabbit.com">sales@campaignrabbit.com</a></span>`;
                        $('.price-title').hide();
                        $('.price-sub').hide();
                    break;
            }
        });
    }
    render() {
        return (
          <Layout>
            <SEO title="Pricing" />
            <div className="pricing-banner-container">
                <div className="intro-text-container text-center">
                    <div className="container-m">
                        <h3>Simple, transparent pricing.</h3>
                        <h2>Pay as you Grow</h2>
                        <p>Estimate your monthly cost based on your customers. <br/>
                        Get started now and pick your plan later.</p>
                    </div>
            	</div>
                <div id="price-slider">
                    <div className="calcuate-pricing-plan container-m">
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
                        <h4 className="price-title">Campaignrabbit will cost you:</h4>
                        <div className="price-value-box">
                            <span className="price-sub">Monthly</span>
                            <div id="monthprice" className="price">Free</div>
                        </div>
                    </div>
            	</div>
                <div className="container-m">
                    <div className="free-trail-block">
                        <div className="row">
                            <div className="col-sm-8">
                                <h3>Start your free 30-day trial now!</h3>
                                <p>No credit card required – no risk</p>
                            </div>
                            <div className="col-sm-4"><a className="btn btn-primary" href="https://app.campaignrabbit.com/register" target="_blank" rel="noopener">Start free trial</a></div>
                        </div>
                    </div>
                </div>
                <div className="faq-block">
                    <div className="container-m">
                        <div className="included-faq-block">
                            <h3>Frequently Asked Questions</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="faq-wrapper">
                                        <h4>What’s an “MCE”?</h4>
                                        <p>MCE means “monthly customers emailed” — how many customers Campaignrabbit reaches for you that month. It doesn’t matter how many times you contact the customer, so you can send as many emails as you’d like! Only pay for people you reach that month, no matter how often you talk to them.</p>
                                    </div>
                                    <div className="faq-wrapper">
                                        <h4>Do I pay per-email?</h4>
                                        <p>Nope! You’ll only pay for the number of unique customers that you email each month, not per email sent or list size.</p>
                                    </div>
                                    <div className="faq-wrapper">
                                        <h4>How are you estimating the number of people I email?</h4>
                                        <p>Our calculator assumes you send a couple of different campaigns with Campaignrabbit (abandonment and welcome campaigns). However, you can send more or less, or target specific customers with our advanced segmentation, it’s up to you!</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="faq-wrapper">
                                        <h4>Do you have a free plan?</h4>
                                        <p>We do! You can email up to 50 customers each month entirely free. You won’t be able to access some features on our free plan.</p>
                                    </div>
                                    <div className="faq-wrapper">
                                        <h4>What if I’m not happy?</h4>
                                        <p>We want you to love using Campaignrabbit, but if you don’t, you can cancel at any time — there’s no annual contract or commitment. Contact us and we’ll be happy to help.</p>
                                    </div>
                                    <div className="faq-wrapper">
                                        <h4>What payment methods do you accept?</h4>
                                        <p>If your store uses Shopify, your Campaignrabbit charge will be added to your monthly Shopify invoice. For WooCommerce or Easy Digital Downloads stores, we accept Visa, MasterCard, American Express, Discover, and PayPal.</p>
                                    </div>
                                    <div className="faq-wrapper">
                                        <h4>How many MCEs will I typically have?</h4>
                                        <p>Check out our calculator above — it estimates this for you based on your current order volume.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-block bottom">
                    <div className="container-m">
                        <div className="included-feature-block">
                            <h3>Included features</h3>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/users.png`} /></p>
                                        <h4>Unlimited Contacts</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/emails.png`} /></p>
                                        <h4>Unlimited Emails</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/marketing-automation.png`} /></p>
                                        <h4>Marketing Automation</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/shopping-cart.png`} /></p>
                                        <h4>Abandoned Cart Recovery Emails</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/call-to-action.png`} /></p>
                                        <h4>Call to action</h4>
                                        <p>Opt-ins, Popups, Sliders, Actions bars</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/product-recommend.png`} /></p>
                                        <h4>Product Recommendations</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/newsletter.png`} /></p>
                                        <h4>Welcome Emails</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/segmentation.png`} /></p>
                                        <h4>Customer Segmentation</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/mail-builder.png`} /></p>
                                        <h4>Visual Email Builder</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/data-driven.png`} /></p>
                                        <h4>Data driven Automation</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/analytics.png`} /></p>
                                        <h4>Analytics and Reporting</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="feature-wrapper">
                                        <p><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/integrations.png`} /></p>
                                        <h4>Integrations</h4>
                                        <p>WooCommerce, J2Store, Shopify</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-m">
                    <div className="free-trail-block">
                        <div className="row">
                            <div className="col-sm-8">
                                <h3>Start your free 30-day trial now!</h3>
                                <p>No credit card required – no risk</p>
                            </div>
                            <div className="col-sm-4"><a className="btn btn-primary" href="https://app.campaignrabbit.com/register" target="_blank" rel="noopener">Start free trial</a></div>
                        </div>
                    </div>
                </div>
            </div>
          </Layout>
        )
    }
}

export default PricingPage
