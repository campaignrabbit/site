import React from 'react';
import $ from 'jquery';
import {FaArrowRight} from 'react-icons/fa';
import {IoMdCart, IoMdMailOpen, IoIosPersonAdd, IoIosThumbsUp, IoIosAnalytics, IoIosHelpBuoy, IoIosGrid, IoIosLaptop} from 'react-icons/io';
import {Link} from 'gatsby';


import recovery from '../images/home-features/Abandoned-Cart-Recovery.png';
import follow from '../images/home-features/Follow-Up-Emails.png';
import recommend from '../images/home-features/Product-Recommendation.png';
import customers from '../images/home-features/Win-Back-Inactive-Customers.png';
import visualEmail from '../images/home-features/WYSIWYG-Email-Editor.png';
import degree from '../images/home-features/Customer-In-Depth-Analytics.png';
import integrate from '../images/home-features/Popular-Integration.png';

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
                            Powerful features tailored for eCommerce businesses to sell more
                        </h2>
                        <p>Learn how Campaignrabbit can drive sales</p>
                    </div>
                    <ul className="tabs">
                        <li className="tab-link current" data-tab="tab-1">
                            <IoMdCart className="tab-icon"/>
                            <span>Abandoned cart recovery</span>
                        </li>
                        <li className="tab-link" data-tab="tab-2">
                            <IoMdMailOpen className="tab-icon"/>
                            <span>Follow-up <br/> Emails</span>
                        </li>
                        <li className="tab-link" data-tab="tab-3">
                            <IoIosPersonAdd className="tab-icon"/>
                            <span>Win-Back Inactive customers</span>
                        </li>
                        <li className="tab-link" data-tab="tab-4">
                            <IoIosThumbsUp className="tab-icon"/>
                            <span>Product Recommendation</span>
                        </li>
                        <li className="tab-link" data-tab="tab-5">
                            <IoIosAnalytics className="tab-icon"/>
                            <span>On-site Messages</span>
                        </li>
                        <li className="tab-link" data-tab="tab-6">
                            <IoIosLaptop className="tab-icon"/>
                            <span>Drag and Drop Email Builder</span>
                        </li>
                        <li className="tab-link" data-tab="tab-7">
                            <IoIosGrid className="tab-icon"/>
                            <span>Powerful Segmentation</span>
                        </li>
                        <li className="tab-link link-arrow">
                            <Link to="/features">
                                <span className="arrow"> <FaArrowRight/></span>
                                See More
                            </Link>
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
