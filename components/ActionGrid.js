import React, { PropTypes } from "react"

function ActionGrid({ elements }) {
    return (
        <div className="Actions">
            { elements }
        </div>
    )
}

ActionGrid.propTypes = {
    elements: PropTypes.array.isRequired
}
ActionGrid.defaultProps = {}

export default ActionGrid
