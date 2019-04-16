import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'

import INTEGRATIONS from '../constants/Integrations';

class IntegrationsPage extends React.Component {
    static renderIntegrations() {
        return INTEGRATIONS.map((card) => {
            const cardClass = `col-md-4`;
            return (
                <div className={cardClass} key={card.TITLE}>
                    <div className="integrated-item-block">
                        <div className="card-img">
                            <img className="img-responsive" src={card.LOGO} alt={card.ALT}/>
                        </div>
                        <div className="card-text">
                            <h3>{card.TITLE}</h3>
                            <p>{card.DESC}</p>
                            {card.DLINK &&
                                <a href={card.DLINK} className="btn-primary">Download</a>
                            }
                        </div>
                    </div>
                </div>
            );
        });
    }
    render(){
        return (
            <Layout>
                <SEO title="Integrations" />
                <div id="integrations">
                    <div className="integration-banner-container">
                        <div className="container-m">
                            <h3>Supported eCommerce Platforms</h3>
                            <p>Connect your favourite eCommerce platform with Campaignrabbit. We support the following platforms at the moment.</p>
                        </div>
                    </div>
                    <div className="single-integration-item-container container-m">
                        <div className="row">
                            {IntegrationsPage.renderIntegrations()}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IntegrationsPage
