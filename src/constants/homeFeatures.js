import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import CALLOUTS from '../constants/homeCallouts';

class homeFeature extends React.Component {
    static renderCallouts() {
        return CALLOUTS.map((card) => {
            const cardClass = `col-md-3`;
            return (
                <div className={cardClass} key={card.TITLE}>
                    <div className="card text-center feature-list">
                        <div className="card-text">
                            <img className="img-responsive" src={card.IMAGE} alt={card.TITLE} />
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
                            Features
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
