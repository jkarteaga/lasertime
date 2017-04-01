import React, { PropTypes } from "react";

function ActionList(props) {
    return (
        <div onClick={props.toggleDisplayMode}>{1}</div>
    )
}

ActionList.propTypes = {
    display: PropTypes.bool.isRequired,
    toggleDisplayMode: PropTypes.func.isRequired
}
ActionList.defaultProps = {}

export default ActionList
