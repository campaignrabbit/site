import React from 'react';
import $ from 'jquery';
import {FaArrowRight} from 'react-icons/fa';

import customerView from '../images/icons/Customer-In-Depth-Analytics.png';
import abandCart from '../images/icons/abandoned-cart-recovery.png';
import dragDrop from '../images/icons/WYSIWYG-Email-Editor.png';
import followEmail from '../images/icons/follow-up-emails.png';
import productRec from '../images/icons/product-recommendations.png';
import winBack from '../images/icons/win-back-inactive-customers.png';
import popInt from '../images/icons/Popular-Integration.png';

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
                            CAMPAIGNRABBIT ?
                        </h2>
                        <p>WHAT, HOW & WHY</p>
                    </div>
                    <ul className="tabs">
                        <li className="tab-link current" data-tab="tab-1">
                            <img className="img-responsive" src={abandCart} alt="Abandoned Cart Recovery"/>
                            <span>Abandoned cart recovery</span>
                        </li>
                        <li className="tab-link" data-tab="tab-2">
                            <img className="img-responsive" src={followEmail} alt="Follow-up Emails"/>
                            <span>Follow-up <br/> Emails</span>
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
                        <li className="tab-link link-arrow">
                            <a href="#">
                                <span className="arrow"> <FaArrowRight/></span>
                                See More
                            </a>
                        </li>
                    </ul>

                    <div id="tab-1" className="tab-content current">
                        <img className="img-fluid" src={recovery} alt="Abandoned Cart Recovery"/>
                    </div>
                    <div id="tab-2" className="tab-content">
                        <img className="img-responsive" src={follow} alt="Follow-up Emails"/>
                    </div>
                    <div id="tab-3" className="tab-content">
                        <img className="img-responsive" src={customers} alt="Win-Back inactive customers"/>
                    </div>
                    <div id="tab-4" className="tab-content">
                        <img className="img-responsive" src={recommend} alt="Product recommendation"/>
                    </div>
                    <div id="tab-5" className="tab-content">
                        <img className="img-responsive" src={degree} alt="Customer in-depth Analytics"/>
                    </div>
                    <div id="tab-6" className="tab-content">
                        <img className="img-responsive" src={visualEmail} alt="WYSIWYG Email builder"/>
                    </div>
                    <div id="tab-7" className="tab-content">
                        <img src={integrate} className="img-responsive" alt="Popular integrations"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default homeTabs;
