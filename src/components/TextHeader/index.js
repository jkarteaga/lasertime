import React from 'react'
import PropTypes from 'prop-types'

function TextHeader({ caption, heading }) {
    return [
        <p className="TextHeader__caption">{caption}</p>,
        <h2 className="TextHeader__heading">{heading}</h2>,
    ]
}

TextHeader.propTypes = {
    caption: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
}

TextHeader.defaultProps = {}

export default TextHeader
