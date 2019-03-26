import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { FaCalendar } from "react-icons/fa"
import { FaTags } from "react-icons/fa"

const DocsHit = clickHandler => ({ hit }) => (
  <div>
    <h4>
      <Link to={hit.fields.slug} onClick={clickHandler}>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Link>
    </h4>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export default DocsHit
