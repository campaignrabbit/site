import React from 'react'
import { Link } from 'gatsby'
import { FaPlay, FaTimes } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'
import ReactModal from 'react-modal'

//images
import bannerImage from '../images/home-banner.png';
import QuickOverview from '../CampaignRabbit-Quick-Tour-Dashboard-Video.mp4';

//sections
import HomeSteps from '../constants/homeSteps';
import HomeFeatures from '../constants/homeFeatures';
import HomeTabs from '../constants/homeTabs';
import HomeServices from '../constants/homeServices';
import HomeReviews from '../constants/homeReviews';
import HomeIntegrations from '../constants/homeIntegrations';

ReactModal.setAppElement('#___gatsby')

class IndexPage extends React.Component {
    componentDidMount () {
        // Smooth scroll to down
        $(".scroll-down").click(function(event){
    		event.preventDefault();
    		$('html,body').animate({scrollTop:$(this.hash).offset().top - 200}, 500);
    	});
        $("#cf_send").click(function() {
            let email = $("#cf_email").val();
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $("#returnmessage").empty();
            if (email == '') {
                $("#returnmessage").html("Please Fill Required Field");
            } else if( !re.test(email) ) {
                $("#returnmessage").html("Please enter valid email");
            } else {
                window.location="https://app.campaignrabbit.com/register?email=" + email;
            }
        });
    }
    constructor(props) {
        super(props)
        this.state = {
          isModalOpen: false,
        }
    }
    handleModalOpen = event => {
        this.setState({ isModalOpen: true })
    }
    handleModalClose = event => {
        this.setState({ isModalOpen: false })
    }
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
                                    <h1>Sell more by sending <span className="highlight">personalised, highly relevant emails and on-site messages</span></h1>
                                    <p className="underline">Campaignrabbit offers tools to engage and convert visitors into customers smartly for growth-focused eCommerce businesses.
                                        </p>
                                    <p className="underline">Email Automation, Follow-Up emails, Abandoned Cart Recovery, Optin Popups, Messenger Prompts, Action Bars and much more. <br />
                                    Plus, you get behaviour based targeting, powerful segmentation, visual email builder, responsive emails and actionable insights.
                                    </p>
                                    <p>Join 1000+ businesses and put your marketing on autopilot today.</p>
                                    <div className="btn-container">
                                        <a className="btn-action btn-edge"
                                            href="https://app.campaignrabbit.com/register"
                                            target="_blank" rel="noopener noreferrer">Get started for FREE <span>No credit card required</span></a>
                                    </div>
                                </div>
                                <div className="col-sm-2">

                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactModal
                      isOpen={this.state.isModalOpen}
                      onRequestClose={this.handleModalClose}
                      contentLabel="Example Modal In Gatsby"
                    >
                    <video width="100%" heigh="100%"  controls autoplay="autoplay">
                      <source src={QuickOverview} type="video/mp4"/>
                      Your browser does not support HTML5 video.
                    </video>

                      <button onClick={this.handleModalClose} className="close-btn"><FaTimes/></button>
                    </ReactModal>
                </div>


                <HomeTabs/>

                <HomeServices/>

                <HomeFeatures/>

                <HomeIntegrations/>

                <div className="home bottom">
                    <div className="container-m text-center">
                        <div className="hero-content wow fadeIn">
                            <h3>Start Selling More Today</h3>
                            <p>Join 1000+ growth-focussed eCommerce brands and start driving more sales</p>
                            <div className="free-trial-form">
                                <form className="form" id="signup-form">
                                    <div className="form-alt">
                                        <div className="form-group flex-70">
                                            <input className="mail form-control" name="email" id="cf_email" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                                        </div>
                                        <div className="form-group flex-30">

                                            <input type="button" id="submit" className="submit-button"  id="cf_send" value="Sign Up for Free"/>
                                        </div>
                                    </div>
                                    <p id="returnmessage" className="returnmessage"></p>
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

export default IndexPage
