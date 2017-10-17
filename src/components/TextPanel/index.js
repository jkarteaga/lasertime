import React from 'react'
import PropTypes from 'prop-types'

function TextPanel({ title, children }) {
    return (
        <div className="TextPanel">
            {title ? <h2 className="TextPanel__title">{title}</h2> : null}
            <div className="TextPanel__body">{children}</div>
        </div>
    )
}

TextPanel.propTypes = {
    title: PropTypes.string,
}

TextPanel.defaultProps = {}

export default TextPanel
