import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import HeaderMenu from './HeaderMenu'
import PhoneList from './PhoneList'
import Logo from './SiteLogo'
import Title from './SiteTitle'
import SocialList from './SocialList'


function PageHeader() {
    const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config

    return (
        <header className="PageHeader">
            <div className="PageHeader__items">

                <div className="PageHeader__item">
                    <PhoneList items={[fixedPhone, mobilePhone]} />
                    <HeaderMenu position="left" items={leftMenuItems} />
                </div>

                <div className="PageHeader__item">
                    <Link to={prefixLink('/')}>
                        <Title />
                        <Logo />
                    </Link>
                </div>

                <div className="PageHeader__item">
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
