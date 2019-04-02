import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from 'gatsby';
import {FaAngleRight} from 'react-icons/fa';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  static renderCallouts(callouts, current_url) {
      return callouts.map((card, index) => {
          const cardClass = `col-md-3`;
          current_url = current_url.replace(/\/$/, "");
          const find = function(input, target){
            var found = false;
            for (var prop in input) {
              if(input[prop] == target){
                  found = true;
              }
            };

            return found;
          };
          let linksC = '';
          if(card.LINKS){
            linksC = (card.LINKS).map(a => a.URL);
          }
          // console.log(linksC);
          if(card.BUTTON_LINK === current_url || find(linksC, current_url)){
            return(
              <div className="sidenav active">
                {card.LINKS ? (
                  <div>
                    <a className="dropdown-btn">{card.TITLE}
                      <FaAngleRight className="fa-caret-down"/>
                    </a>
                    <div className="dropdown-container">
                      {card.LINKS.map(link => <a href={link.URL} key={link.TEXTNODE} className={((link.URL === current_url) ? 'active' : '')}>{link.TEXTNODE}</a>)}
                    </div>
                  </div>
                ) :
                (
                  <a href={card.BUTTON_LINK}>{card.TITLE}</a>
                )
                }
              </div>
            )
          }else{
            return (
              <div>

                {card.LINKS ? (
                  <div>
                    <a className="dropdown-btn">{card.TITLE}
                      <FaAngleRight className="fa-caret-down"/>
                    </a>
                    <div className="dropdown-container">
                      {card.LINKS.map(link => <a href={link.URL} key={link.TEXTNODE} className={((link.URL === current_url) ? 'active' : '')}>{link.TEXTNODE}</a>)}
                    </div>
                  </div>
                ) :
                (
                  <a href={card.BUTTON_LINK}>{card.TITLE}</a>
                )
                }
              </div>
            );
          }

      });
  }
  render() {
    return (
        <div className="sidenav">
          { LandingPage.renderCallouts(this.props.navLinks, this.props.currentUrl) }
        </div>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
