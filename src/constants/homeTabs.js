import React from 'react';
import $ from 'jquery';
import {FaArrowRight, FaShoppingCart, FaEnvelopeOpenText, FaEnvelope, FaUsers, FaRegThumbsUp, FaChartLine, FaLaptop} from 'react-icons/fa';
import {Link} from 'gatsby';

class homeTabs extends React.Component {
    componentDidMount () {
        $('ul.tabs li.tab-link').click(function(){
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
                        <h3>
                            Powerful features tailored for <strong>eCommerce</strong> businesses
                        </h3>
                        <p>Learn how Campaignrabbit can drive sales and grow your business on autopilot</p>
                    </div>
                </div>
                <div className="container-s">
                    <div className="row">
                          <ul className="col-sm-6 tabs">
                              <li className="tab-link current" data-tab="tab-1">
                                  <FaEnvelope className="tab-icon"/>
                                  <span> Welcome Emails</span>
                              </li>
                              <li className="tab-link" data-tab="tab-2">
                                  <FaEnvelopeOpenText className="tab-icon"/>
                                  <span>Follow-up Emails</span>
                              </li>
                              <li className="tab-link" data-tab="tab-3">
                                  <FaRegThumbsUp className="tab-icon"/>
                                  <span>Product Recommendations</span>
                              </li>
                              <li className="tab-link" data-tab="tab-4">
                                  <FaShoppingCart className="tab-icon"/>
                                  <span>Recover Abandoned Carts</span>
                              </li>
                              <li className="tab-link" data-tab="tab-5">
                                  <FaUsers className="tab-icon"/>
                                  <span>Win-Back Inactive Customers</span>
                              </li>
                              <li className="tab-link" data-tab="tab-6">
                                  <FaChartLine className="tab-icon"/>
                                  <span>Customer In-Depth Analytics</span>
                              </li>
                              <li className="tab-link" data-tab="tab-7">
                                  <FaLaptop className="tab-icon"/>
                                  <span>Visual Email Builder</span>
                              </li>
                              <li className="link-arrow">
                                  <Link to="/features">
                                      <span className="arrow"><FaArrowRight/></span>
                                      <span>See More</span>
                                  </Link>
                              </li>
                          </ul>
                          <div className="col-sm-6">
                            <div id="tab-1" className="tab-content">
                                <img src={`${process.env.CR_MEDIA_URL}/images/home-features/welcome.png`} className="img-responsive" alt="Welcome Emails"/>
                            </div>
                            <div id="tab-2" className="tab-content">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/home-features/Follow-Up-Emails.png`} alt="Follow-up Emails"/>
                            </div>
                            <div id="tab-3" className="tab-content">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/home-features/Product-Recommendation.png`} alt="Product recommendation"/>
                            </div>
                            <div id="tab-4" className="tab-content current">
                                <img className="img-fluid" src={`${process.env.CR_MEDIA_URL}/images/home-features/Abandoned-Cart-Recovery.png`} alt="Abandoned Cart Recovery"/>
                            </div>
                            <div id="tab-5" className="tab-content">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/home-features/Win-Back-Inactive-Customers.png`} alt="Win-Back inactive customers"/>
                            </div>
                            <div id="tab-6" className="tab-content">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/home-features/Customer-In-Depth-Analytics.png`} alt="Customer in-depth Analytics"/>
                            </div>
                            <div id="tab-7" className="tab-content">
                                <img className="img-responsive" src={`${process.env.CR_MEDIA_URL}/images/home-features/WYSIWYG-Email-Editor.png`} alt="Visual Email builder"/>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default homeTabs;
