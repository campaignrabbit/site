import React from 'react';
import $ from 'jquery';

// import abandCart from '../images/feature-icons/shopping-cart.png';
// import followUp from '../images/feature-icons/emails.png';
// import winBack from '../images/feature-icons/users.png';
// import prodRec from '../images/feature-icons/product-recommend.png';
// import cusAnalytics from '../images/feature-icons/analytics.png';
// import emailBuilder from '../images/feature-icons/mail-builder.png';
import popInt from '../images/feature-icons/integrations.png';
import customerView from '../images/home-icons/360-degree-view-of-customers.png';
import abandCart from '../images/home-icons/abandoned-cart-recovery.png';
import dragDrop from '../images/home-icons/drag-and-drop-visual-email-builder.png';
import followEmail from '../images/home-icons/follow-up-emails.png';
import productRec from '../images/home-icons/product-recommendations.png';
import winBack from '../images/home-icons/win-back-inactive-customers.png';

import recovery from '../images/features/abandoned-cart-recovery-2.png';
import follow from '../images/features/follow-up-emails-2.png';
import recommend from '../images/features/product-recommendations-2.png';
import customers from '../images/features/win-back-inactive-customers-2.png';
import visualEmail from '../images/features/Drag-and-drop-visual-email-builder.png';
import degree from '../images/features/360-degree-view-of-customers-2.png';
import integrate from '../images/features/supports-your-favourite-ecommerce-platform–woocommerce.png';

class homeTabs extends React.Component {
    componentDidMount () {
        $('ul.tabs li').click(function(){
    		var tab_id = $(this).attr('data-tab');

    		$('ul.tabs li').removeClass('current');
    		$('.tab-content').removeClass('current');

    		$(this).addClass('current');
    		$("#"+tab_id).addClass('current');
    	})
    }
    render () {
        return (
            <div id="exTab2" className="features-tabs">
                <div className="container">
                    <div className="features-intro text-center">
                        <h2>
                            Running <span className="highlight">email campaigns</span> <br className="hidden-xs"/>is made easier than ever with it
                        </h2>
                    </div>
                    <ul className="tabs">
                        <li className="tab-link current" data-tab="tab-1">
                            <img className="img-responsive" src={abandCart} alt="Abandoned Cart Recovery"/>
                            <span>Abandoned cart recovery</span>
                        </li>
                        <li className="tab-link" data-tab="tab-2">
                            <img className="img-responsive" src={followEmail} alt="Follow-up Emails"/>
                            <span>Follow-up Emails</span>
                        </li>
                        <li className="tab-link" data-tab="tab-3">
                            <img className="img-responsive" src={winBack} alt="Win-Back inactive customers"/>
                            <span>Win-Back inactive customers</span>
                        </li>
                        <li className="tab-link" data-tab="tab-4">
                            <img className="img-responsive" src={productRec} alt="Product recommendation"/>
                            <span>Product recommendation</span>
                        </li>
                        <li className="tab-link" data-tab="tab-5">
                            <img className="img-responsive" src={customerView} alt="Customer in-depth Analytics"/>
                            <span>Customer in-depth Analytics</span>
                        </li>
                        <li className="tab-link" data-tab="tab-6">
                            <img className="img-responsive" src={dragDrop} alt="WYSIWYG Email builder"/>
                            <span>WYSIWYG Email builder</span>
                        </li>
                        <li className="tab-link" data-tab="tab-7">
                            <img src={popInt} className="img-responsive" alt="Popular integrations"/>
                            <span>Popular integrations</span>
                        </li>
                    </ul>

                    <div id="tab-1" className="tab-content current">
                        <p>Remind customers who have abandoned thier cart with automatic emails at <span className="highlight">set intervals and recover them.</span></p>
                        <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
                    </div>
                    <div id="tab-2" className="tab-content">
                         <p>Automatically send email follow-ups to your customers. You can ask them for a feedback, a review, or just say hello</p>
                             <img className="img-responsive" src={follow} alt="Follow-up Emails"/>
                    </div>
                    <div id="tab-3" className="tab-content">
                        <p>Bring back inactive customers with special offers through automated email campaigns</p>
                            <img className="img-responsive" src={customers} alt="Win-Back inactive customers"/>
                    </div>
                    <div id="tab-4" className="tab-content">
                        <p>Recommend “Socks” to customers when they purchase “shoes”. Start automatically sending relevant product recommendations</p>
                            <img className="img-responsive" src={recommend} alt="Product recommendation"/>
                    </div>
                    <div id="tab-5" className="tab-content">
                        <p>Get valuable insights about your customers. Learn what days they usually place orders, time of order, total value of orders and more</p>
                            <img className="img-responsive" src={degree} alt="Customer in-depth Analytics"/>
                    </div>
                    <div id="tab-6" className="tab-content">
                        <p>Create beautiful emails with our intutive drag-and-drop visual email builder. Use short codes to add dynamic data like their names.</p>
                        <img className="img-responsive" src={visualEmail} alt="WYSIWYG Email builder"/>
                    </div>
                    <div id="tab-7" className="tab-content">
                        <p>Campaignrabbit works beautifully with WooCommerce. Synchronise orders and customers seamlessly. Just download and install the WooCommerce plugin for Campaignrabbit.</p>
                        <img src={integrate} className="img-responsive" alt="Popular integrations"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default homeTabs;
