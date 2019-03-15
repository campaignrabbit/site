import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery'

class SignUpForm extends React.Component {

  componentDidMount() {
    console.log(this.props.user_mail_id);
        $(".cf_send").click(function(e) {
             e.preventDefault();
            let user_mail = $(".cf_email").val();
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $("#returnmessage").empty();
            if (user_mail == '') {
                window.location="https://app.campaignrabbit.com/register";
            } else {
                window.location="https://app.campaignrabbit.com/register?email=" + user_mail;
            }
        });
  }

  render() {
    return (
      <div className={this.props.className}>
          <div className="free-trial-form">
              <h3>
                {
                  this.props.title &&
                  this.props.title
                }
              </h3>
              <p>{
                this.props.description &&
                this.props.description
              }</p>
              <form className="form" id="signup-form">
                  <div className="form-alt">
                    {this.props.user_mail_id &&
                      <div className="form-group flex-70">
                          <input className="mail form-control cf_email" name="email" size="50" maxLength="50" placeholder="Enter your email" type="text" />
                      </div>
                    }
                      <div className="form-group flex-30">
                          <input type="button" id="submit" className= {"submit-button cf_send " + this.props.btnClass} value={this.props.btnText} />
                      </div>
                  </div>
                  <p id="returnmessage" className="returnmessage"></p>
              </form>
              <p className="note">{this.props.note}</p>
          </div>
      </div>
    );
  }
}

SignUpForm.defaultProps = {
    title: '',
    user_mail_id: true,
    btnText: 'Sign Up for free',
    description: '',
    className: '',
    note: 'Get started for free. No credit card required.',
    btnClass: '',
};

export default SignUpForm;
