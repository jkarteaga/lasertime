import React from 'react'
import PropTypes from 'prop-types'

function FloatBlock({
    left,
    right,
    oneThird,
    oneFourth,
    paddingTop,
    children,
}) {
    let floatClass

    floatClass = left ? 'FloatBlock--left' : 'FloatBlock--right'

    if (oneThird) {
        floatClass += ' FloatBlock--one-third'
    } else if (oneFourth) {
        floatClass += ' FloatBlock--one-fourth'
    }

    if (paddingTop) {
        floatClass += ' FloatBlock--paddingTop'
    }

    return <div className={`FloatBlock ${floatClass}`}>{children}</div>
}

FloatBlock.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    oneThird: PropTypes.bool,
    oneFourth: PropTypes.bool,
    paddingTop: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

FloatBlock.defaultProps = {
    left: false,
    oneThird: false,
    oneFourth: false,
}

export default FloatBlock
