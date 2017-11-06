import React from 'react'
import PropTypes from 'prop-types'

function Figure({ children, caption }) {
    return (
        <figure className="Figure">
            {children}
            {caption ? (
                <figcaption className={'Figure__caption'}>{caption}</figcaption>
            ) : null}
        </figure>
    )
}

Figure.propTypes = {
    caption: PropTypes.string,
}

Figure.defaultProps = {}

export default Figure
