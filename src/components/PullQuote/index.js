import React from 'react'
import PropTypes from 'prop-types'

function PullQuote({ color, children }) {
    return (
        <blockquote className={`PullQuote PullQuote--${color}`}>
            <div className="PullQuote__body">{children}</div>
        </blockquote>
    )
}

PullQuote.propTypes = {
    color: PropTypes.oneOf(['gray', 'green', 'orange', 'red']),
}

PullQuote.defaultProps = {
    color: 'gray',
}

export default PullQuote
