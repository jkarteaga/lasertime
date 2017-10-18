import React from 'react'
import PropTypes from 'prop-types'

function PullQuote({ children }) {
    return (
        <blockquote className="PullQuote">
            <div className="PullQuote__body">{children}</div>
        </blockquote>
    )
}

PullQuote.propTypes = {}

PullQuote.defaultProps = {}

export default PullQuote
