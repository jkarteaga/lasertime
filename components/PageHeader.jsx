import React, { Component, PropTypes } from 'react'
import { config } from 'config'
import HeaderMenu from './HeaderMenu'
import PhoneWidget from './PhoneList'
import Logo from './Logo'


function PageHeader(props) {
    const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config

    return (
        <div>
            <div className="page-header__top outline">
                Header Top
                <PhoneWidget items={[fixedPhone, mobilePhone]} />
                <Logo />
            </div>
            <div className="page-header__bottom outline">
                <HeaderMenu position="left" items={leftMenuItems} />
                <HeaderMenu position="right" items={rightMenuItems} />
            </div>
        </div>
    )
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader
