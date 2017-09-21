import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Radium from 'radium'
import { config } from 'config'
import logo from '../assets/static/img/SiteLogo__logo.jpg'

const Menu = require('react-burger-menu').push
const RadiumLink = Radium(Link)

class MobileMenu extends Component {
    state = {
        render: false,
        isOpen: false,
        timer: null
    }

    componentDidMount() {
        this._initialize()
        window.addEventListener('resize', this._onResize)
    }

    _initialize = () => {
        setTimeout(this._onResize, 10)
    }

    _onResize = () => {

        if (this.state.timer) {
            clearTimeout(this.state.timer)
        }

        const id = setTimeout(() => {
            if (window && window.innerWidth > 550) {
                this.setState({
                    render: false
                })
            }
            else {
                this.setState({
                    render: true
                })
            }
        }, 10)

        this.setState({
            timer: id
        })
    }


    render() {
        if (!this.state.render) {
            return null;
        }

        const { leftMenuItems, rightMenuItems } = config

        const menuItems = leftMenuItems.concat(rightMenuItems)

        const menuElements = menuItems.map((item) => {
            return (
                <RadiumLink
                    key={item[0]}
                    to={prefixLink(item[0])}
                    className="MobileMenu__link"
                >
                    {item[1]}
                </RadiumLink>
            )
        })

        return (
            <Menu customCrossIcon={false} isOpen={this.state.isOpen} wait={20} {...this.props}>
                <div className="MobileMenu__logo">
                    <RadiumLink to={prefixLink('/')}>
                        <img src={logo} />
                    </RadiumLink>
                </div>
                {menuElements}
            </Menu>
        )
    }
}

MobileMenu.propTypes = {}
MobileMenu.defaultProps = {}

export default MobileMenu
