import React from 'react'
import PropTypes from 'prop-types'

function PullQuote({ color, type, alignCenter, children }) {
    let blockquoteClass = `PullQuote PullQuote--${color}`
    switch (type) {
        case 'box':
            blockquoteClass += ' PullQuote--box'
            break
        case 'horizontal':
            blockquoteClass += ' PullQuote--horizontal'
            break
        default:
            blockquoteClass += ' PullQuote--box'
    }

    let bodyClass = 'PullQuote__body'

    if (alignCenter) {
        bodyClass += ' PullQuote__body--alignCenter'
    }

    return (
        <blockquote className={blockquoteClass}>
            <div className={bodyClass}>{children}</div>
        </blockquote>
    )
}

PullQuote.propTypes = {
    color: PropTypes.oneOf(['gray', 'green', 'orange', 'red']),
    type: PropTypes.oneOf(['box', 'horizontal']),
    alignCenter: PropTypes.bool,
}

PullQuote.defaultProps = {
    color: 'gray',
}

export default PullQuote
