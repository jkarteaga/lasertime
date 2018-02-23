import React from 'react'
import PropTypes from 'prop-types'

/*-----------------------------------------------------------------------------
 *  Text background highlight, default color - @gold-bg
 *----------------------------------------------------------------------------*/
function InlineHighlight({ children, color }) {
    if (color) {
        return (
            <span className={`InlineHighlight InlineHighlight--${color}`}>
                {children}
            </span>
        )
    }
    return <span className="InlineHighlight">{children}</span>
}

InlineHighlight.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['green', 'red']),
}

export default InlineHighlight
