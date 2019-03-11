import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import reachAudience from '../images/sue-bryce-7aefe319.jpg';

import recovery from '../images/features/abandoned-cart-recovery-2.png';
import follow from '../images/features/follow-up-emails-2.png';
import recommend from '../images/features/product-recommendations-2.png';
import customers from '../images/features/win-back-inactive-customers-2.png';
import visualEmail from '../images/features/Drag-and-drop-visual-email-builder.png';
import degree from '../images/features/360-degree-view-of-customers-2.png';
import integrate from '../images/features/supports-your-favourite-ecommerce-platform–woocommerce.png';

const homeFeature = () =>(
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
)
export default homeFeature;
