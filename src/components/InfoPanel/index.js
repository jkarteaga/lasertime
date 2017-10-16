import React from 'react'
import PropTypes from 'prop-types'

function InfoPanel({ title, children }) {
    return (
        <div className="InfoPanel">
            <h2 className="InfoPanel__title">{title}</h2>
            <div className="InfoPanel__body">{children}</div>
        </div>
    )
}

InfoPanel.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['gray', 'green', 'yellow', 'red']),
}

InfoPanel.defaultProps = {}

export default InfoPanel
