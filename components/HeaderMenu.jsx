import React, { Component, PropTypes } from 'react'
import { Route, Link } from 'react-router'

class HeaderMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/articles/">Статьи</Link>
                <Link to="/doctors/">Врачи</Link>
                <Link to="/prices /">Цены</Link>
            </div>
        )
    }
}

HeaderMenu.propTypes = {}
HeaderMenu.defaultProps = {}

export default HeaderMenu
