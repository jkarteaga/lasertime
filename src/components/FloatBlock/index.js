import React from 'react'
import PropTypes from 'prop-types'

function FloatBlock({ left, right, oneThird, children }) {
    let floatClass

    floatClass = left ? 'FloatBlock--left' : 'FloatBlock--right'

    if (oneThird) {
        floatClass += ' FloatBlock--one-third'
    }

    return <div className={`FloatBlock ${floatClass}`}>{children}</div>
}

FloatBlock.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    oneThird: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

FloatBlock.defaultProps = {
    left: false,
    oneThird: false,
}

export default FloatBlock
