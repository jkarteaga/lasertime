import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.less'
import logo from '../../assets/jpg/logo.jpg'

function Logo() {
    return (
        <div className="page-header__logo">
            <Link to={prefixLink('/')}>
                <img
                    alt="Клиника Знак Качества"
                    title="Клиника Знак Качества"
                    src={prefixLink(`${logo}`)}
                    width="237"
                    height="100"
                />
            </Link>
        </div>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
