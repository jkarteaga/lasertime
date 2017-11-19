import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function DoctorInfoPanel({ name, position, description, imageSizes }) {
    return (
        <article className="DoctorInfoPanel">
            <div className="DoctorInfoPanel__body">
                <h1 className="DoctorInfoPanel__name">{name}</h1>
                <div className="DoctorInfoPanel__position">{position}</div>
                <p className="DoctorInfoPanel__description">{description}</p>
            </div>
            <div className="DoctorInfoPanel__photo">
                <Img sizes={imageSizes} title={name} alt={name} />
            </div>
        </article>
    )
}

DoctorInfoPanel.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSizes: PropTypes.object.isRequired,
}

export default DoctorInfoPanel
