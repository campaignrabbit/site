import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from 'gatsby';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
`;


class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  static renderCallouts(callouts) {
      return callouts.map((card, index) => {
          console.log(card);
          const cardClass = `col-md-3`;
          if(card.IMGPOSITION == 'top'){
            return (
                <div key={card.TITLE} className="box-content center">
                <div className="box-image">
                  <img src={card.IMAGE} alt={card.TITLE} />
                </div>
                  <div className="box-text">
                    <h3 dangerouslySetInnerHTML={ {__html: card.TITLE} } />
                    <p dangerouslySetInnerHTML={ {__html: card.COPY} } />
                    {card.LIST &&
                      <div className="card-links">
                          <ul>
                            {card.LIST.map(link => <li key={link.TEXTNODE}>{link.TEXTNODE}</li>)}
                          </ul>
                      </div>
                    }
                    {card.BUTTON &&
                      <div className="card-button">
                          <Link className="btn btn-primary center" to={card.BUTTON.LINK}>{card.BUTTON.TEXT}</Link>
                      </div>
                    }
                  </div>
                </div>
            );
          } else if(card.IMGPOSITION == 'bottom'){
            return (
                <div key={card.TITLE} className="box-content center">
                  <div className="box-text">
                  <h3 dangerouslySetInnerHTML={ {__html: card.TITLE} } />
                  <p dangerouslySetInnerHTML={ {__html: card.COPY} } />
                  {card.LIST &&
                      <div className="card-links">
                          <ul>
                            {card.LIST.map(link => <li key={link.TEXTNODE}>{link.TEXTNODE}</li>)}
                          </ul>
                      </div>
                    }
                    {card.BUTTON &&
                      <div className="card-button">
                          <Link className="btn btn-primary center" to={card.BUTTON.LINK}>{card.BUTTON.TEXT}</Link>
                      </div>
                    }
                  </div>
                  <div className="box-image">
                    <img src={card.IMAGE} alt={card.TITLE} />
                  </div>
                </div>
            );
          } else if(card.IMGPOSITION == 'right'){
            return (
                <div key={card.TITLE} className="box-content">
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="box-text">
                      <h3 dangerouslySetInnerHTML={ {__html: card.TITLE} } />
                      <p dangerouslySetInnerHTML={ {__html: card.COPY} } />
                      {card.LIST &&
                          <div className="card-links">
                              <ul>
                                {card.LIST.map(link => <li key={link.TEXTNODE}>{link.TEXTNODE}</li>)}
                              </ul>
                          </div>
                        }
                        {card.BUTTON &&
                          <div className="card-button">
                              <Link className="btn btn-primary center" to={card.BUTTON.LINK}>{card.BUTTON.TEXT}</Link>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="box-image">
                        <img src={card.IMAGE} alt={card.TITLE} />
                      </div>
                    </div>
                  </div>
                </div>
            );
          }
          else{
            return (
                <div key={card.TITLE} className="box-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="box-image">
                        <img src={card.IMAGE} alt={card.TITLE} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="box-text">
                      <h3 dangerouslySetInnerHTML={ {__html: card.TITLE} } />
                      <p dangerouslySetInnerHTML={ {__html: card.COPY} } />
                        {card.LIST &&
                          <div className="card-links">
                              <ul>
                                {card.LIST.map(link => <li key={link.TEXTNODE}>{link.TEXTNODE}</li>)}
                              </ul>
                          </div>
                        }
                        {card.BUTTON &&
                          <div className="card-button">
                              <Link className="btn btn-primary center" to={card.BUTTON.LINK}>{card.BUTTON.TEXT}</Link>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
            );
          }
      });
  }
  render() {
    return (
        <Inner>
          { LandingPage.renderCallouts(this.props.callouts) }
        </Inner>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
