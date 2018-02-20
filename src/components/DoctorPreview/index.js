import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function DoctorPreview({ name, position, imageSizes }) {
    return (
        <div className="DoctorPreview">
            <h2 className="DoctorPreview__name">{name}</h2>
            <div className="DoctorPreview__position">{position}</div>
            {/*<div className="DoctorPreview__image">*/}
            {/*<Img sizes={imageSizes} />*/}
            {/*</div>*/}
        </div>
    )
}

DoctorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    // imageSizes: PropTypes.object.isRequired,
}

DoctorPreview.defaultProps = {}

export default DoctorPreview
