import React from 'react'
import PropTypes from 'prop-types'

function List({ title, titleH2, titleH3, marker, children }) {
    return (
        <div className={`List List--marker-${marker}`}>
            {title ? <div className="List__title">{title}</div> : null}
            {titleH2 ? (
                <h2 className="List__title List__title--h2">{titleH2}</h2>
            ) : null}
            {titleH3 ? (
                <h3 className="List__title List__title--h3">
                    <span>{titleH3}</span>
                </h3>
            ) : null}
            {children}
        </div>
    )
}

List.propTypes = {
    title: PropTypes.string,
    titleH2: PropTypes.string,
    titleH3: PropTypes.string,
    marker: PropTypes.oneOf(['check', 'plus', 'minus', 'cross', 'dot']),
}

List.defaultProps = {}

export default List
