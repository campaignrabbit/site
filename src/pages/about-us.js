import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import $ from 'jquery'
import EMPLOYEE_PROFILE from '../constants/employeeCards';

class AboutUsPage extends React.Component {
    static renderEmployees() {
        return EMPLOYEE_PROFILE.map(employee => (
            <div className="col-md-3" key={employee.NAME}>
                <div className="team-member-block">
                    <div className="team-member-image"><img src={employee.PROFILE} className="img-responsive" alt={employee.NAME} />
                    </div>
                    <div className="lower-box">
                        <h3>{employee.NAME}</h3>
                        <div className="designation">{employee.DESIGNATION}</div>
                    </div>
                </div>
            </div>
        ));
    }
    render() {
        return (
          <Layout>
            <SEO title="About us" />
            <div className="aboutus-intro-block">
                <div className="aboutus-title-block container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>help you achieve consistency</h4>
                            <h2>We are Ready to Take you One Step Forward</h2>
                            <div className="separator"><span className="dott">.</span><span className="dott">.</span><span className="dott">.</span></div>
                            <p>The Seed of CampaignRabbit’s idea- Make it Simple!<br/>
                            We,<br/>
                            Reinvented the traditional Email marketing strategy into a smart algorithm to make you achieve maximum customer engagement<br/>
                            We are a team built with enthusiasts each adding different flavor to the table. Be it coding the algorithm, strategizing marketing ideas, managing clients, every little aspect of the business is taken with big care by our expert team.</p>
                            <p>Our work desks not just shares responsibilities but lots of Smiles as well!</p>
                        </div>
                        <div className="col-sm-6">
                            <img src={`${process.env.CR_MEDIA_URL}/images/about/cartrabbit-inside-the-office.jpg`} alt="cartrabbit Office" />
                        </div>
                    </div>


                </div>
        	</div>
            <div className="meet-team-container">
                <div className="container">
                    <div className="aboutus-title-block text-center">
                        <h2>Meet The Experts</h2><h4>we’ve the Best Team</h4>
                        <div className="separator"><span className="dott">.</span><span className="dott">.</span><span className="dott">.</span></div>
                    </div>
                    <div className="team-content-block">
                		<div className="row">
                            { AboutUsPage.renderEmployees() }
                		</div>
                	</div>
                </div>
            </div>
          </Layout>
        )
    }
}

export default AboutUsPage
