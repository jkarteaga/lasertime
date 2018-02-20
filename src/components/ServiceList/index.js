import React from 'react'
import PropTypes from 'prop-types'

function ServiceList({ listItems }) {
    const listElements = listItems.map((item, idx) => (
        <li key={idx} className="ServiceList__item">
            {item}
        </li>
    ))

    return <ul className="ServiceList">{listElements}</ul>
}

ServiceList.propTypes = {
    listItems: PropTypes.array.isRequired,
}

ServiceList.defaultProps = {}

export default ServiceList
