import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/campaignrabbit-logo.png'
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/column"
import { FaFacebookF, FaTwitter} from 'react-icons/fa'
import $ from 'jquery'

class Footer extends React.Component {
    componentDidMount () {
        // Back to top
        $('#back-top').on('click', function(){
          $("html, body").animate({scrollTop: 0}, 500);
          return false;
        });
    }
    render() {
        return(
            <div className="footer-container">
                <Container>
                    <Row>

                        <Col size='2'>
                            <h4 className="footer-title">Product</h4>
                            <ul>
                                <li>
                                  <Link to="/features">Features</Link>
                                </li>
                                <li>
                                  <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                  <Link to="/integrations">Integrations</Link>
                                </li>
                                <li>
                                  <Link to="/use-cases">Use cases</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col size='2'>
                            <h4 className="footer-title">Platforms</h4>
                            <ul>
                                <li>
                                  <Link to="/">Shopify</Link>
                                </li>
                                <li>
                                  <Link to="/">WooCommerce</Link>
                                </li>
                                <li>
                                  <Link to="/">J2Store</Link>
                                </li>
                                <li>
                                  <Link to="/">Magento</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col size='2'>
                            <h4 className="footer-title">Resources</h4>
                            <ul>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/docs">Documentation</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col size='2'>
                            <div>
                                <h4 className="footer-title">Company</h4>
                                <ul>
                                    <li><Link to="/about-us">About us</Link></li>
                                </ul>
                                <h5>Also from us:</h5>
                                <ul>
                                    <li><a href="https://www.flycart.org/" target="_blank" rel="noopener noreferrer">Flycart</a></li>
                                    <li><a href="https://www.j2store.org/" target="_blank" rel="noopener noreferrer">J2Store</a></li>
                                    <li><a href="https://www.retainful.com/" target="_blank" rel="noopener noreferrer">Retainful</a></li>
                                    <li><a href="https://www.billingrabbit.com/" target="_blank" rel="noopener noreferrer">Billingrabbit</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col size='4'>
                            <p>Sell more by sending targetted, data-driven marketing emails to your customers.</p>
                            <div className="footer-social-block">
                            	<div className="footer-social-links clearfix">
                            		<a target="_blank" href="https://www.facebook.com/campaignrabbit/" className="foot-social-link"><i className="fa fa-facebook"><FaFacebookF/></i></a>
                                <a target="_blank" href="https://twitter.com/campaignrabbit/" className="foot-social-link"><i className="fa fa-twitter"><FaTwitter/></i></a>
                              </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <div className="footer-sm">
                        <Link className="footer-logo" to="/"><img src={Logo} alt="Campaignrabbit" /></Link>
                        <h6>&copy; <Link to="/">Campaignrabbit</Link> <script>document.write(new Date().getFullYear());</script>.
                        All rights reserved. #07-04, High Street Centre, 1 North Bridge Road,  Singapore, 179094</h6>
                        <ul>
                            <li>
                                <Link to="/privacy-policy">Privacy policy</Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
                <div id="back-top" className="bk-top">
                    <div className="bk-top-txt">
                        <a className="back-to-top js-scroll-trigger" href="#main">top</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
