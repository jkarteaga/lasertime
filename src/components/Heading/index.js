import React from 'react'
import PropTypes from 'prop-types'

function Heading({ titleH1, titleH2, titleH3, titleH4, type }) {
    const cls = `Heading Heading--${type}`

    if (titleH1) {
        return (
            <div className={cls}>
                <h1>{titleH1}</h1>
            </div>
        )
    } else if (titleH2) {
        return <h2 className={cls}>{titleH2}</h2>
    } else if (titleH3) {
        return <h3 className={cls}>{titleH3}</h3>
    } else {
        return <h4 className={cls}>{titleH4}</h4>
    }
}

Heading.propTypes = {
    titleH1: PropTypes.string,
    titleH2: PropTypes.string,
    titleH3: PropTypes.string,
    titleH4: PropTypes.string,
    type: PropTypes.oneOf(['plain', 'line']),
}

Heading.defaultProps = {}

export default Heading
