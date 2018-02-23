import React from 'react'
import PropTypes from 'prop-types'

function InfoPanel({ title, color, shadow, children }) {
    const dropShadowClass = shadow ? 'InfoPanel--shadow' : ''
    return (
        <div className={`InfoPanel InfoPanel--${color} ${dropShadowClass}`}>
            <h2 className="InfoPanel__title">{title}</h2>
            <div className="InfoPanel__body">{children}</div>
        </div>
    )
}

InfoPanel.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['gray', 'green', 'orange', 'red', 'gold']),
    shadow: PropTypes.bool,
}

InfoPanel.defaultProps = {
    color: 'gray',
    shadow: false,
}

export default InfoPanel
