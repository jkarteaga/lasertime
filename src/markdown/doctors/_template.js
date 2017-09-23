import React, { PropTypes } from 'react'

function _template({ children }) {
    return (
        <div className="PageContent__wrapper">
            { children }
        </div>
    )
}

_template.propTypes = {
    children: PropTypes.object.isRequired
}
_template.defaultProps = {}

export default _template
