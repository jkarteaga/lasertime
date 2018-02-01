import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

function ServiceListItem({ title, link, imgSizes }) {
    return (
        <li className="ServiceListItem">
            <Link className="ServiceListItem__link" to={link}>
                <div className="ServiceListItem__img">
                    <Img sizes={imgSizes} alt={title} title={title} />
                </div>
                <div className="ServiceListItem__title">{title}</div>
            </Link>
        </li>
    )
}

ServiceListItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
}

export default ServiceListItem
