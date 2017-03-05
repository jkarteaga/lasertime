import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import logo from '../assets/static/img/SiteLogo__logo.jpg'

function HeaderLogo() {
    return (
        <div className="PageHeader__logo PageHeader__logo--mask">
            <div className="PageHeader__logo--shine">
                <img
                    alt="Клиника Знак Качества"
                    title="Клиника Знак Качества"
                    src={logo}
                />
            </div>
        </div>
    )
}

HeaderLogo.propTypes = {}
HeaderLogo.defaultProps = {}

export default HeaderLogo
