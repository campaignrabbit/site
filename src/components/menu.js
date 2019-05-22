import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="/features/" activeClassName="active" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="/pricing/" activeClassName="active"className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
                <Link to="/integrations/" activeClassName="active" className="nav-link">Integrations</Link>
            </li>
            <li className="nav-item">
                <Link to="/use-cases/" activeClassName="active" className="nav-link">Use cases</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog/" activeClassName="active" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/docs/" className="nav-link" activeClassName="active" partiallyActive={true} >Docs</Link>
            </li>
        </ul>
    </div>
)

export default Menu;
