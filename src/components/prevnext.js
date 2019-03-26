import React from 'react'
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="pagination-links">
            {prev && <li className="nav-prev"><a href={prev.fields.slug}>
                <FaAngleDoubleLeft/> {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="nav-next"><a href={next.fields.slug}>
                {next.frontmatter.title} {" "} <FaAngleDoubleRight/>

            </a></li>}
        </ul>
    )
}

export default PrevNext;
