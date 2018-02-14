import React from 'react'
import PropTypes from 'prop-types'

function Heading({
    titleH1,
    titleH2,
    titleH3,
    titleH4,
    type,
    big,
    medium,
    small,
}) {
    let cls = `Heading Heading--${type}`

    if (big) {
        cls += ' Heading--bg'
    } else if (medium) {
        cls += ' Heading--md'
    } else if (small) {
        cls += ' Heading--sm'
    }

    if (titleH1) {
        return (
            <div className={cls}>
                <h1>{titleH1}</h1>
            </div>
        )
    } else if (titleH2) {
        return (
            <div className={cls}>
                <h2>{titleH2}</h2>
            </div>
        )
    } else if (titleH3) {
        return (
            <div className={cls}>
                <h3>{titleH3}</h3>
            </div>
        )
    } else {
        return (
            <div className={cls}>
                <h4>{titleH4}</h4>
            </div>
        )
    }
}

Heading.propTypes = {
    titleH1: PropTypes.string,
    titleH2: PropTypes.string,
    titleH3: PropTypes.string,
    titleH4: PropTypes.string,
    type: PropTypes.oneOf(['simple', 'line']),
    big: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
}

Heading.defaultProps = {
    type: 'simple',
}

export default Heading
