import React from 'react'
import PropTypes from 'prop-types'

function ActionGrid({ elements }) {
    return <div className="ActionGrid">{elements}</div>
}

ActionGrid.propTypes = {
    elements: PropTypes.array.isRequired,
}
ActionGrid.defaultProps = {}

export default ActionGrid
