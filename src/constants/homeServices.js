import React from 'react';

import recovery from '../images/features/abandoned-cart-recovery-2.png';
import follow from '../images/features/follow-up-emails-2.png';
import recommend from '../images/features/product-recommendations-2.png';
import customers from '../images/features/win-back-inactive-customers-2.png';
import visualEmail from '../images/features/Drag-and-drop-visual-email-builder.png';
import degree from '../images/features/360-degree-view-of-customers-2.png';
import integrate from '../images/features/supports-your-favourite-ecommerce-platform–woocommerce.png';

const homeFeature = () =>(
    <div id="services" className="home-services wow fadeInDown">
        <div className="text-center container-m">
            <div className="services-intro">
                <div className="divider-line"></div>
                <h2>Discover how Campaignrabbit can drive more sales</h2>
                <p>
                    You have spent a huge amount of money for acquiring customers. Now <span className="highlight">how do you retain them and get more dollars per customer?</span><br/>
                    We know it is quite a challange. That is where <strong>Campaignrabbit</strong> comes in. We let you automate your marketing efforts in a few simple steps.<br/>
                    Right from extending a warm welcome, <span className="highlight">Campaignrabbit helps you stay connected with your customers, engage and retain them in a more meaningful way</span> - using
                    a wide range of features.<br/>

                    <strong>Grow your business by building lasting relationships with your customers.</strong>
                </p>
                <div className="divider-line"></div>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-img-div">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
            <div className="service-text-div">
                <h4>Make a great first impression - Engage customers</h4>
                <h2>Drive sales with <strong>Engaging Messages</strong></h2>
                <div className="divider-line"></div>
                <p>Building a stronger relationship begins the moment customer signs-up. A personalised welcome email goes a long way in building a lasting relationship.</p>
                <p>And keep the conversations at intervals so that your customers have a greater brand re-call.</p>
                <p>Use our wide range of tools and features to build brand loyalty.</p>

                <ul className="list">
                    <li>Send a personalised email.</li>
                    <li>Follow-Up at specific intervals. Keep yours customers engaged</li>
                    <li>Show a welcome back message. Use a popup / slide in / Email</li>
                </ul>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-text-div">
                <h4>No one wants boring newsletters</h4>
                <h2>Send only <strong>Relevant Messages</strong></h2>
                <div className="divider-line"></div>
                <p>It is high time you stop sending the boring newsletters. People are tired of receiving them as they do not deliver any value.</p>
                <p>Send messages based on the shopping behaviour, purchase history of your customers. Segment your customers based on their interests and respond to them with relevant messages</p>
                <p>Send timely and relevant messages on autopilot & let your customers know they’re valued.</p>
                <ul className="list">
                    <li>Send targeted messages based on the shopping behaviour or customer attributes</li>
                    <li>Send a thank you note as soon as the customer placed the order</li>
                    <li>Customize your messages to reflect your brand</li>
                </ul>
            </div>
            <div className="service-img-div align-right">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-img-div">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
            <div className="service-text-div">
                <h4>Never let go a customer without buying</h4>
                <h2>Recover <strong>Abandoned Carts</strong></h2>
                <div className="divider-line"></div>
                <p>More than 70% of the shoppers abandon their carts. It's a fact. But research shows that at least 40% of these abandoned carts could be recovered with a proper follow-up.</p>
                <p>Remind customers when they abandon the cart and encourage them to complete the purchase with a coupon code.</p>
                <ul className="list">
                    <li>Automated reminders for abandoned carts</li>
                    <li>Trigger Exit-Intent Based popup when a customer tries to leave the cart or checkout page</li>
                    <li>Automatically follow-up if the customer did not convert</li>
                </ul>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-text-div">
                <h4>Retain and earn more dollars per customer</h4>
                <h2>Drive <strong>Repeat Sales</strong></h2>
                <div className="divider-line"></div>
                <p>Acquiring a customer is important. What is more crucial is retaining them and increase the average revenue per customer.</p>
                <p>Nurture your customers and provide more value. Make smart cross-sell recommendations. Only those who purchased an iPhone will be interested in Airpods. A generic newsletter does not work here</p>
                <p>Make recommendations based on the purchase history, total spent, geolocation and more</p>
                <ul className="list">
                    <li>Smart cross-sells</li>
                    <li>Dynamic product recommendations</li>
                    <li>Win-back inactive customers</li>
                </ul>
            </div>
            <div className="service-img-div align-right">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
        </div>
    </div>
)
export default homeFeature;
