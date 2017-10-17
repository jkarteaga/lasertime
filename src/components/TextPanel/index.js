import React from 'react'
import PropTypes from 'prop-types'

function TextPanel({ title, shadow, children }) {
    const dropShadowClass = shadow ? 'TextPanel--shadow' : ''

    return (
        <div className={`TextPanel ${dropShadowClass}`}>
            {title ? <h2 className="TextPanel__title">{title}</h2> : null}
            <div className="TextPanel__body">{children}</div>
        </div>
    )
}

TextPanel.propTypes = {
    title: PropTypes.string,
    shadow: PropTypes.bool,
}

TextPanel.defaultProps = {
    shadow: false,
}

export default TextPanel
