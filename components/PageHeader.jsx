import React, { Component, PropTypes } from 'react'
import { config } from 'config'
import HeaderMenu from './HeaderMenu'
import Logo from '../components/Logo'

class PageHeader extends Component {

    render() {
        const { leftMenuItems, rightMenuItems } = config

        // console.log('---', config.leftMenuItems)
        return (
            <div>
                <div className="page-header__top outline">
                    Header Top
                    <Logo />
                </div>
                <div className="page-header__bottom outline">
                    <HeaderMenu position="left" items={leftMenuItems} />
                    <HeaderMenu position="right" items={rightMenuItems} />
                </div>
            </div>
        )
    }
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader
