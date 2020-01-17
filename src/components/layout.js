import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import MetaTags from '../components/Metatags'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'

const Layout = ({children, location, crumbLabel}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <div className="wrapper">

                    <MetaTags />

                    

                    <div id="main" className="main">
                        { /* location &&
                        <div className="breadcrumb-container">
                            <div className="container">
                                <Breadcrumb
                                    location={location}
                                    crumbLabel={crumbLabel}
                                    crumbStyle={{color: "#666"}}
                                    crumbActiveStyle={{color: "#6772e5"}}
                                />
                            </div>
                        </div>
                        */}
                        {children}
                    </div>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
