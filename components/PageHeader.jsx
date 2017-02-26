import React from 'react'
import { config } from 'config'
import HeaderMenu from './HeaderMenu'
import PhoneList from './PhoneList'
import Logo from './SiteLogo'
import Title from './SiteTitle'
import SocialList from './SocialList'


function PageHeader() {
    const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config

    return (
        <header className="page-header">
            <div className="page-header__items">

                <div className="page-header__item">
                    <PhoneList items={[fixedPhone, mobilePhone]} />
                    <HeaderMenu position="left" items={leftMenuItems} />
                </div>

                <div className="page-header__item">
                    <Title />
                    <Logo />
                </div>

                <div className="page-header__item">
                    <SocialList />
                    <HeaderMenu position="right" items={rightMenuItems} />
                </div>
            </div>
        </header>
    )
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader
