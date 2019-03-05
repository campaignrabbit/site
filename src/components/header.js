import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Logo from '../images/campaignrabbit-logo.png'
import Container from "../components/container"
import Menu from './menu'

class Header extends React.Component {
    componentDidMount () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('past-main effect-main');
            } else {
                $('.navbar').removeClass('past-main');
            }
        })
    }
    render () {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top" >
                <Container type='l'>
                    <Link className="navbar-brand" to="/">
                        <img src={ Logo } alt="Retainful" />
                    </Link>
                    <Menu/>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto navbar-right">
                            <li className="nav-item">
                                <a href="https://app.campaignrabbit.com/login" target="_blank" className="btn-link nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://app.campaignrabbit.com/register" target="_blank" className="btn-cta nav-link">Sign Up for free</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
