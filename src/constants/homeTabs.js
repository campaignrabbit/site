import React from 'react';
import $ from 'jquery';
import {FaArrowRight, FaShoppingCart, FaEnvelopeOpenText, FaEnvelope, FaUsers, FaRegThumbsUp, FaChartLine, FaLaptop} from 'react-icons/fa';
import {Link} from 'gatsby';

class homeTabs extends React.Component {
    componentDidMount () {
        $('.features-tabs ul.tabs li.tab-link').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.features-tabs ul.tabs li').removeClass('current');
            $('.features-tabs .tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })

        // $.fn.cycle = function(timeout, cls) {
        //     var l = this.length,
        //         current = 0,
        //         prev = 0,
        //         elements = this;
        //
        //     if (this.filter('.current').length > 0) {
        //         current = this.index(this.filter('.current')[0]) + 1;
        //         prev = current - 1;
        //     }
        //
        //     function next() {
        //         elements.eq(prev).removeClass(cls);
        //         elements.eq(current).addClass(cls);
        //         prev = current;
        //         current = (current + 1) % l;
        //         setTimeout(next, timeout);
        //     }
        //     setTimeout(next, timeout);
        //     return this;
        // };
        //
        // $('ul.tabs li.tab-link').cycle(2000, 'current');
        // $('.tab-content').cycle(2000, 'current');
    }
    render () {
        return (
            <div id="exTab2" className="features-tabs">
                <div className="container">
                    <div className="features-intro text-center">
                        <h3>
                            Email Marketing. Marketing Automation. Popups. Action Bars
                        </h3>
                        <p>All the tools you need to drive sales and grow your business on autopilot</p>
                    </div>
                </div>
                <div className="container-s">
                    <div className="row">
                          <ul className="col-sm-5 tabs">
                              <li className="tab-link current" data-tab="tab-1">
                                  <FaEnvelope className="tab-icon"/>
                                  <span>Welcome Emails</span>
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
                                  <span>Popups</span>
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
                          <div className="col-sm-7">
                            <div id="tab-1" className="tab-content current">
                                <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/welcome.png`} className="img-responsive" alt="Welcome Emails"/>
                            </div>
                            <div id="tab-2" className="tab-content">
                                <img className="img-responsive" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/Follow-Up-Emails.png`} alt="Follow-up Emails"/>
                            </div>
                            <div id="tab-3" className="tab-content">
                                <img className="img-responsive" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/Product-Recommendation.png`} alt="Product recommendation"/>
                            </div>
                            <div id="tab-4" className="tab-content">
                                <img className="img-fluid" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/Abandoned-Cart-Recovery.png`} alt="Abandoned Cart Recovery"/>
                            </div>
                            <div id="tab-5" className="tab-content">
                                <img className="img-responsive" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/Win-Back-Inactive-Customers.png`} alt="Win-Back inactive customers"/>
                            </div>
                            <div id="tab-6" className="tab-content">
                                <img className="img-responsive" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/Visitor-Engagement.png`} alt="Visitor Engagement"/>
                            </div>
                            <div id="tab-7" className="tab-content">
                                <img className="img-responsive" src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-features/WYSIWYG-Email-Editor.png`} alt="Visual Email builder"/>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default homeTabs;
