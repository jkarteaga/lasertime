import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


function MenuItem({ path, name }) {
    return (
        <li className="header-menu__item">
            <Link
                to={prefixLink(path)}
                className="header-menu__link"
                activeClassName="header-menu__link--active"
            >
                {name}
            </Link>
        </li>
    )
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
MenuItem.defaultProps = {}

export default MenuItem
