import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

function Logo(props) {
    return (
        <Link to={prefixLink('/')}>Logo</Link>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
