import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="/features" className="nav-link js-scroll-trigger">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="/pricing" className="nav-link js-scroll-trigger">Pricing</Link>
            </li>
            <li className="nav-item">
                <Link to="/integrations" className="nav-link js-scroll-trigger">Integrations</Link>
            </li>
            <li className="nav-item">
                <Link to="/use-cases" className="nav-link js-scroll-trigger">Use cases</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link js-scroll-trigger">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/docs" className="nav-link js-scroll-trigger">Docs</Link>
            </li>
            <li className="nav-item">
                <Link to="https://app.campaignrabbit.com/login" className="btn-link nav-link js-scroll-trigger">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="https://app.campaignrabbit.com/register" className="btn-cta nav-link js-scroll-trigger">Sign Up</Link>
            </li>
        </ul>
    </div>
)

export default Menu;
