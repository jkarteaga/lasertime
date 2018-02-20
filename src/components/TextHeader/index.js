import React from 'react'
import PropTypes from 'prop-types'

function TextHeader({ caption, heading }) {
    return [
        <p key={0} className="TextHeader__caption">
            {caption}
        </p>,
        <h2 key={1} className="TextHeader__heading">
            {heading}
        </h2>,
    ]
}

TextHeader.propTypes = {
    caption: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
}

TextHeader.defaultProps = {}

export default TextHeader
