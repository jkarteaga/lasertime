import React from 'react'
import PropTypes from 'prop-types'

function InfoBlock({ color, children }) {
    return <div className={`InfoBlock InfoBlock--${color}`}>{children}</div>
}

InfoBlock.propTypes = {
    color: PropTypes.oneOf(['gray', 'green', 'orange', 'red']),
}

InfoBlock.defaultProps = {
    color: 'gray',
}

export default InfoBlock
