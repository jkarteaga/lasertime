import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Radium from 'radium'
import { config } from 'config'

const Menu = require('react-burger-menu').push
let RadiumLink = Radium(Link)

class MobileMenu extends Component {
    render() {
        const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config

        const menuItems = leftMenuItems.concat(rightMenuItems)

        const menuElements = menuItems.map((item) => {
            return (
                <RadiumLink
                    to={prefixLink(item[0])}
                    className="MobileMenu__link"
                >
                    {item[1]}
                </RadiumLink>
            )
        })

        return (
            <Menu wait={20} {...this.props}>
                {menuElements}
            </Menu>
        )
    }
}

MobileMenu.propTypes = {}
MobileMenu.defaultProps = {}

export default MobileMenu
