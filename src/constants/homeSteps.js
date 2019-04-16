import React from 'react';

class homeFeature extends React.Component {
    render(){
        return (
          <div id="intro" className="intro flex-split wow fadeIn">
              <div className="multi-step-container container-m">
                  <div className="flex-intro align-center">
                      <div className="text-center">
                          <h3>Get started in Minutes</h3>
                      </div>
                      <div className="row">
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/store.png`} /></p>
                          </div>
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/campaigns.png`} /></p>
                          </div>
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/autopilot.png`} /></p>
                          </div>
                      </div>
                      <div className="rl-multi-step numbered">
                          <ul className="rl-multi-step-list">
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Connect your store</p>

                              </div></li>
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Create Campaigns</p>

                              </div></li>
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Turn on Autopilot</p>

                              </div></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default homeFeature
