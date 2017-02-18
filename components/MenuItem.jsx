import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class MenuItem extends Component {
    render() {
        return (
            <li className="menu__list-item">
                <Link to={this.props.path} className="menu__link" activeClassName="menu__link--active">
                    {this.props.name}
                </Link>
            </li>
        )
    }
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
MenuItem.defaultProps = {}

export default MenuItem
