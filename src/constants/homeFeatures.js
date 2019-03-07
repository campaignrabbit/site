import React from 'react';
import customerView from '../images/home-icons/360-degree-view-of-customers.png';
import abandCart from '../images/home-icons/abandoned-cart-recovery.png';
import dragDrop from '../images/home-icons/drag-and-drop-visual-email-builder.png';
import followEmail from '../images/home-icons/follow-up-emails.png';
import productRec from '../images/home-icons/product-recommendations.png';
import winBack from '../images/home-icons/win-back-inactive-customers.png';

import {FaArrowRight} from 'react-icons/fa';


import CALLOUTS from '../constants/homeCallouts2';

class homeFeature extends React.Component {
    static renderCallouts() {
        return CALLOUTS.map((card) => {
            const cardClass = `col-md-6`;
            return (
                <div className={cardClass} key={card.TITLE}>
                    <div className="card text-center feature-list">
                        <div className="card-text">
                            <img className="img-responsive" src={card.IMAGE} alt="Abandoned Cart Recovery"/>
                            <h3>{card.TITLE}</h3>
                            <p>{card.COPY}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render(){
        return (
            <div id="features" className="features wow fadeInDown">
                <div className="container-m">
                    <div className="features-intro text-center">
                        <h2>
                            Features that Speaks
                        </h2>
                    </div>
                    <div className="row">
                        {homeFeature.renderCallouts()}
                    </div>
                    <div className="features-intro text-center">
                        <p>
                            <a href="/features">
                                Explore more features <FaArrowRight/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeFeature
