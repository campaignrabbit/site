import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

import { SearchIcon, Form, Input } from "./styles"

export default connectSearchBox(({ refine, ...rest }) => (
  <Form className="docs-search-box">
    <Input
      type="text"
      placeholder="What are you looking for?"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
