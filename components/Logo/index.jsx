import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.less'

function Logo(props) {
    return (
        <Link to={prefixLink('/')} className="logo__link">Logo</Link>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
