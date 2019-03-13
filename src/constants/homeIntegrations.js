import React from 'react';
import {Link} from 'gatsby';
import {FaArrowRight} from 'react-icons/fa';

class homeFeature extends React.Component {
    render(){
        return (
            <div id="integrations" className="integrations wow fadeInDown">
                <div className="container-m">
                    <div className="integrations-intro text-center">
                        <h2>
                            <strong>Easily integrate</strong> with your favorite <br/> ecommerce platform
                        </h2>
                        <p>Can't find it? Connect any custom platform via API instead.</p>
                    </div>
                    <div className="integration-list row">
                        <div className="col-md-3">
                            <Link to="/" className="integration-item shopify">
                                <span className="logo logo-grey"></span>
                                <span className="logo logo-color"></span>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/" className="integration-item shopify-plus">
                                <span className="logo logo-grey"></span>
                                <span className="logo logo-color"></span>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/" className="integration-item woocommerce">
                                <span className="logo logo-grey"></span>
                                <span className="logo logo-color"></span>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/" className="integration-item j2store">
                                <span className="logo logo-grey"></span>
                                <span className="logo logo-color"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeFeature
