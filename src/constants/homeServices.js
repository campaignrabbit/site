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
                <h2>
                    Send Unlimited <strong>Email Campaigns</strong> <br/>
                    <strong>Automate</strong> your Campaigns <br/>
                    Trigger timely <strong>PopUps & Recommendations</strong> <br/>
                    Scale your Business by <strong>5x</strong>.
                </h2>
                <div className="divider-line"></div>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-img-div">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
            <div className="service-text-div">
                <h4>Drive sales from your email campaigns</h4>
                <h2>Send Email <strong>Campaigns</strong></h2>
                <div className="divider-line"></div>
                <p>Design, schedule and track email campaigns. Drive sales from your emails.</p>
                <ul className="list">
                    <li>Upload opted-in email list</li>
                    <li>Send broadcast email campaigns</li>
                    <li>Reports to measure clicks, opens and more...‍</li>
                </ul>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-text-div">
                <h4>Drive sales from your email campaigns</h4>
                <h2>Send Email <strong>Campaigns</strong></h2>
                <div className="divider-line"></div>
                <p>Design, schedule and track email campaigns. Drive sales from your emails.</p>
                <ul className="list">
                    <li>Upload opted-in email list</li>
                    <li>Send broadcast email campaigns</li>
                    <li>Reports to measure clicks, opens and more...‍</li>
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
                <h4>Drive sales from your email campaigns</h4>
                <h2>Send Email <strong>Campaigns</strong></h2>
                <div className="divider-line"></div>
                <p>Design, schedule and track email campaigns. Drive sales from your emails.</p>
                <ul className="list">
                    <li>Upload opted-in email list</li>
                    <li>Send broadcast email campaigns</li>
                    <li>Reports to measure clicks, opens and more...‍</li>
                </ul>
            </div>
        </div>
        <div className="service-content-container">
            <div className="service-text-div">
                <h4>Drive sales from your email campaigns</h4>
                <h2>Send Email <strong>Campaigns</strong></h2>
                <div className="divider-line"></div>
                <p>Design, schedule and track email campaigns. Drive sales from your emails.</p>
                <ul className="list">
                    <li>Upload opted-in email list</li>
                    <li>Send broadcast email campaigns</li>
                    <li>Reports to measure clicks, opens and more...‍</li>
                </ul>
            </div>
            <div className="service-img-div align-right">
                <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
            </div>
        </div>
    </div>
)
export default homeFeature;
