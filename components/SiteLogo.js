import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import logo from '../assets/jpg/logo.jpg'

function Logo() {
    return (
        <div className="PageHeader__logo PageHeader__logo--mask">
            <div className="PageHeader__logo--shine">
                <img
                    alt="Клиника Знак Качества"
                    title="Клиника Знак Качества"
                    src={prefixLink(`${logo}`)}
                    width="230"
                />
            </div>
        </div>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
