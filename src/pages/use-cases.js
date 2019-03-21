import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'

class UseCasesPage extends React.Component {
    componentDidMount () {
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
    }
    render() {
        return (
          <Layout>
            <SEO title="Use Cases" />
            <div className="usecases-banner-container">
                <div className="features-header-banner text-center">
                    <div className="container-m">
                        <h2>Howdy! Be it Email automation. Be it Conversion marketing.<br/>
                        Campaign Rabbit has got your back covered.</h2>
                        <p>Time to enjoy your cup of coffee. ‘Coz Campaign Rabbit makes the following tasks- a piece of cake.</p>
                    </div>
            	</div>
            </div>
            <div className="usecases-example-container">
                <div className="container">
                    <div className="usecases-row row">
                        <div className="col-sm-6">
                            <div className="usecase-image-block">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/use-cases/send-follow-up-emails.png`} alt="Follow-up Emails"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="usecase-content-block">
                                <h3>Send Follow Up Emails – Build #Customer Relation</h3>
                                <blockquote>
                                    <p>‘Business is more than just making a Sale’</p>
                                </blockquote>
                                <ul>
                                    <li>Stay connected with every customer even after a sale is complete. Ask them for product reviews, feedbacks, survey forms, and share valuable information like safety instructions, user manual – after every purchase.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="usecases-row row">
                        <div className="col-sm-6">
                            <div className="usecase-content-block">
                                <h3>Win Back Customers</h3>
                                <ul>
                                <li>“How You doing?” is the best message to start it again. Send personalized emails to customers who haven’t visited your store for a long time.</li>
                                </ul>
                                <blockquote>
                                <p>‘Business isn’t just making new customers, Business is never losing a customer’</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="usecase-image-block">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/use-cases/win-back-customers.png`} alt="Follow-up Emails"/>
                            </div>
                        </div>
                    </div>
                    <div className="usecases-row row">
                        <div className="col-sm-6">
                            <div className="usecase-image-block">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/use-cases/show-product-suggestions.png`} alt="Follow-up Emails"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="usecase-content-block">
                                <h3>Show Product Suggestions – Achieve #High Sales Conversion</h3>
                                <blockquote>
                                <p>‘One sale makes the seed for many Sales.’</p>
                                </blockquote>
                                <ul>
                                <li>Increase your sale conversion opportunities by recommending products that your customers can’t refuse relating to their purchase history.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="usecases-row row">
                        <div className="col-sm-6">
                            <div className="usecase-content-block">
                                <h3>Cart Abandonment Emails</h3>
                                <blockquote>
                                <p>‘Seize every single opportunity to sell’</p>
                                </blockquote>
                                <ul>
                                <li>Remind your customers of What’s still left in the shopping cart. Draft personalized emails to encourage them in completing the purchase.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="usecase-image-block">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/use-cases/cart-abandonment-emails.png`} alt="Follow-up Emails"/>
                            </div>
                        </div>
                    </div>
                </div>
        	</div>
          </Layout>
        )
    }
}

export default UseCasesPage
