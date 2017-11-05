import React from 'react'
import PropTypes from 'prop-types'

function Figure({ children, caption }) {
    return (
        <div className="Figure">
            {children}
            {caption ? (
                <figcaption className={'Figure__caption'}>{caption}</figcaption>
            ) : null}
        </div>
    )
}

Figure.propTypes = {
    caption: PropTypes.string,
}

Figure.defaultProps = {}

export default Figure
