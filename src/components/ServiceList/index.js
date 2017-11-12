import React from 'react'
import PropTypes from 'prop-types'

function ServiceList({ children }) {
    return <ul className="ServiceList">{children}</ul>
}

ServiceList.propTypes = {
    children: PropTypes.node.isRequired,
}

ServiceList.defaultProps = {}

export default ServiceList
