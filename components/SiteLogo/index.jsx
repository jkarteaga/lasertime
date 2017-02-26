import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.less'
import logo from '../../assets/jpg/logo.jpg'

function Logo() {
    return (
        <div className="site-head__logo">
            <Link to={prefixLink('/')}>
                <img
                    alt="Клиника Знак Качества"
                    title="Клиника Знак Качества"
                    src={prefixLink(`${logo}`)}
                    width="345"
                    height="145"
                />
            </Link>
        </div>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
