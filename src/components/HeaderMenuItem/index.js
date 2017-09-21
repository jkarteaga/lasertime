import React, { PropTypes } from 'react'
import Link from 'gatsby-link'

function HeaderMenuItem({ path, name }) {
    return (
        <li className="HeaderMenu__item">
            <Link
                to={path}
                className="HeaderMenu__link"
                activeClassName="HeaderMenu__link--active"
            >
                {name}
            </Link>
        </li>
    )
}

HeaderMenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
HeaderMenuItem.defaultProps = {}

export default HeaderMenuItem
