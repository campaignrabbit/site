import React from 'react'
import { Link } from 'gatsby'
import { FaPlay } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'
import ReactModal from 'react-modal'
import {FaArrowRight} from 'react-icons/fa';
//images
import bannerImage from '../images/home-banner.png';
import connectStore from '../images/store.png';
import createCampaigns from '../images/campaigns.png';
import turnAutopilot from '../images/autopilot.png';
import reachAudience from '../images/sue-bryce-7aefe319.jpg';
//sections
import HomeFeatures from '../constants/homeFeatures';
import HomeTabs from '../constants/homeTabs';
import HomeServices from '../constants/homeServices';

ReactModal.setAppElement('#___gatsby')

class IndexPage extends React.Component {
    componentDidMount () {
        // Smooth scroll to down
        $(".scroll-down").click(function(event){
    		event.preventDefault();
    		$('html,body').animate({scrollTop:$(this.hash).offset().top - 200}, 500);
    	});
        $("#cf_send").click(function() {
            var email = $("#cf_email").val();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $(".returnmessage").empty(); // To empty previous error/success message.
            // Checking for blank fields.
            if (email == '') {
                $(".returnmessage").html("Please Fill Required Field");
            } else if( !re.test(email) ) {
                $(".returnmessage").html("Please enter valid email");
            } else {
                window.location="https://app.campaignrabbit.com/register?email=" + email;
            }
        });
        $("#cf_send1").click(function() {
            var email = $("#cf_email1").val();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $(".returnmessage").empty(); // To empty previous error/success message.
            // Checking for blank fields.
            if (email == '') {
                $(".returnmessage").html("Please Fill Required Field");
            } else if( !re.test(email) ) {
                $(".returnmessage").html("Please enter valid email");
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
        // console.log('handleModalOpen: ', event);
        this.setState({ isModalOpen: true })
    }

    handleModalClose = event => {
        // console.log('handleModalOpen: ', event);
        this.setState({ isModalOpen: false })
    }
    render(){
        return (
            <Layout>
                <SEO title="Campaignrabbit - Sell more by sending data-driven emails to your customers"
                     keywords={[`Send data-driven emails to your customers`]}/>

                <div id="home" className="home">
                    <div className="container-m text-center">
                        <div className="hero-content wow fadeIn">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1>Sell more by sending <span className="highlight">data-driven emails</span> <br/> to your customers</h1>
                                    <p>Works with WooCommerce, J2Store & more</p>
                                    <p>
                                        <Link to="#" className="btn-action btn-dark" onClick={this.handleModalOpen}>
                                            <FaPlay/> Watch Demo now <span>Quick overview</span>
                                        </Link>
                                        <a className="btn-action btn-edge"
                                            href="https://app.campaignrabbit.com/register"
                                            target="_blank" rel="noopener noreferrer">Try it for FREE <span>No credit card required</span></a>
                                    </p>
                                </div>
                                <div className="col-sm-2">

                                </div>
                            </div>

                        </div>
                        <div className="hero-img wow fadeIn">
                            <img className="img-fluid" src={bannerImage} alt="banner"/>
                        </div>
                    </div>
                    <ReactModal
                      isOpen={this.state.isModalOpen}
                      onRequestClose={this.handleModalClose}
                      contentLabel="Example Modal In Gatsby"
                    >
                      <h2>Donate</h2>
                      <button onClick={this.handleModalClose}>Close Modal</button>
                    </ReactModal>
                </div>
                <div className="hero-2">
                    <div className="intro-block container-m text-center">
                        <h3>Ready to scale your online business?</h3>
                        <p>Boost your sale today</p>
                        <div className="free-trial-form">
                            <form className="form-inline form-alt" id="signup-form">
                                <div className="form-group flex-70">
                                    <input className="mail form-control" name="email" id="cf_email" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                                </div>
                                <div className="form-group flex-30">

                                    <input type="button" id="submit" className="submit-button"  id="cf_send" value="Sign Up for Free"/>
                                </div>
                                <p className="returnmessage"></p>
                            </form>
                            <p>Get started for free. No credit card required.</p>
                        </div>
                    </div>
                </div>

                <div id="intro" className="intro flex-split wow fadeIn">
                    <div className="multi-step-container container-m">
                        <div className="flex-intro align-center">
                            <div className="text-center">
                                <h3>Get started in Minutes</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="rl-item-icon"><img src={connectStore} /></p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="rl-item-icon"><img src={createCampaigns} /></p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="rl-item-icon"><img src={turnAutopilot} /></p>
                                </div>
                            </div>
                            <div className="rl-multi-step numbered">
                                <ul className="rl-multi-step-list">
                                    <li className="rl-multi-step-item active">
                                    <div className="rl-item-wrap">
                                    <p className="rl-item-title">Connect your store</p>

                                    </div></li>
                                    <li className="rl-multi-step-item active">
                                    <div className="rl-item-wrap">
                                    <p className="rl-item-title">Create Campaigns</p>

                                    </div></li>
                                    <li className="rl-multi-step-item active">
                                    <div className="rl-item-wrap">
                                    <p className="rl-item-title">Turn on Autopilot</p>

                                    </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeTabs/>

                <HomeServices/>

                <HomeFeatures/>

                <div className="hero-2 bottom">
                    <div className="intro-block container-m text-center">
                        <h3>Get started for free today</h3>
                        <p>Boost your sale today</p>
                        <div className="free-trial-form">
                            <form className="form-inline form-alt" id="signup-form1">
                                <div className="form-group flex-70">
                                    <input className="mail form-control" name="email" id="cf_email1" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                                </div>
                                <div className="form-group flex-30">

                                    <input type="button" id="submit" className="submit-button"  id="cf_send1" value="Sign Up for Free"/>
                                </div>
                                <p className="returnmessage"></p>
                            </form>
                            <p>Get started for free. No credit card required.</p>
                        </div>
                    </div>
                </div>

                <div className="yd-ft wow fadeIn">
                    <div className="container-m">
                        <div className="text-center">
                            <h2>How customers use Campaignrabbit</h2>
                            <hr/>
                        </div>
                        <div className="yd-ft-inner">
                            <div className="yd-ft-right">
                                <img src={reachAudience} alt="customers"/>
                            </div>
                            <div className="yd-ft-left">
                                <h3><a href="#">Gimlet Media</a></h3>
                                <h4>StartUp & Reply All podcasts.</h4>
                                <p>Gimlet Media is the award-winning podcasting company started by Alex Blumberg and Matt Lieber. Members get early access to shows, exclusive merchandise, and the opportunity to meet staff in Slack.
                                </p>
                                <p><em>Photo © Emily Assiran/New York Observer</em>
                                </p>
                                <hr/>
                            </div>
                        </div>
                        <div className="yd-ft-inner">
                            <div className="yd-ft-left">
                                <h3><a href="#">Sue Bryce Education</a></h3>
                                <h4>Learn from one of the world&apos;s best.</h4>
                                <p>Sue Bryce is one of the world’s most influential fine-art portrait photographers and educators. Members get access to hours of educational content that helps them build a rewarding and profitable career.
                                </p>
                                <p><em>Photo © Caitlin Thomas</em>
                                </p>
                                <hr/>
                            </div>
                            <div className="yd-ft-right">
                                <img src={reachAudience} alt="customers"/>
                            </div>
                        </div>
                        <div className="yd-ft-inner">
                            <div className="yd-ft-right">
                                <img src={reachAudience} alt="customers"/>
                            </div>
                            <div className="yd-ft-left">
                                <h3><a href="#">Gimlet Media</a></h3>
                                <h4>StartUp & Reply All podcasts.</h4>
                                <p>Gimlet Media is the award-winning podcasting company started by Alex Blumberg and Matt Lieber. Members get early access to shows, exclusive merchandise, and the opportunity to meet staff in Slack.
                                </p>
                                <p><em>Photo © Emily Assiran/New York Observer</em>
                                </p>
                                <hr/>
                            </div>
                        </div>
                        <div className="features-intro text-center">
                            <p>
                                <a href="/features">
                                    More Testimonials <FaArrowRight/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="home">
                    <div className="container-m text-center">
                        <div className="hero-content wow fadeIn">
                            <h2>The great way to sell more.</h2>
                            <p>Sign up and get instant access. No Credit Card required.</p>
                            <p>
                                <a className="btn-action btn-edge"
                                    href="https://app.campaignrabbit.com/register"
                                    target="_blank" rel="noopener noreferrer">Try it for FREE</a>
                            </p>
                            <hr/>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default IndexPage
