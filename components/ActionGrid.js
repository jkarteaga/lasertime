import React, { PropTypes } from "react"

function ActionGrid({ elements }) {
    return (
        <div className="ActionGrid">
            { elements }
        </div>
    )
}

ActionGrid.propTypes = {
    elements: PropTypes.array.isRequired
}
ActionGrid.defaultProps = {}

export default ActionGrid
