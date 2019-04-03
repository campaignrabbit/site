import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { FaCalendar } from "react-icons/fa"
import { FaTags } from "react-icons/fa"

const DocsHit = clickHandler => ({ hit }) => (
  <div className="hit-item">
      <Link to={hit.slug} onClick={clickHandler}>
        <h5>
            <Highlight attribute="title" hit={hit} tagName="mark" />
        </h5>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </Link>
  </div>
)

export default DocsHit
