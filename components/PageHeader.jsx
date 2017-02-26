import React from 'react'
import { config } from 'config'
import HeaderMenu from './HeaderMenu'
import PhoneList from './PhoneList'
import Logo from './Logo'
import Social from './Social'


function PageHeader(props) {
    const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config

    return (
        <header className="page-header">
            <div className="page-header__items">

                <div className="page-header__item">
                    <PhoneList items={[fixedPhone, mobilePhone]} />
                    <HeaderMenu position="left" items={leftMenuItems} />
                </div>

                <div className="page-header__item">
                    <Logo />
                </div>

                <div className="page-header__item">
                    <Social />
                    <HeaderMenu position="right" items={rightMenuItems} />
                </div>
            </div>
        </header>
    )
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader
