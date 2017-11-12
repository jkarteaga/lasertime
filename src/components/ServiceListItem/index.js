import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ServiceListItem({ title, imgSizes }) {
    return (
        <li className="ServiceListItem">
            <Img sizes={imgSizes} alt={title} title={title} />
            <div className="ServiceListItem__title">{title}</div>
        </li>
    )
}

ServiceListItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
}

ServiceListItem.defaultProps = {}

export default ServiceListItem
