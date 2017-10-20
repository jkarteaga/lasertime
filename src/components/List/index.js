import React from 'react'
import PropTypes from 'prop-types'

function List({ marker, children }) {
    return <div className={`List List--marker-${marker}`}>{children}</div>
}

List.propTypes = {
    marker: PropTypes.oneOf(['check', 'plus', 'minus', 'cross']),
}

List.defaultProps = {}

export default List
