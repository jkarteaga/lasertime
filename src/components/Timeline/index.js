import React from 'react'
import PropTypes from 'prop-types'

function Timeline({ children }) {
    return (
        <div className="Timeline">
            <ul className="Timeline__list">{children}</ul>
        </div>
    )
}

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Timeline

export const TimelineItem = ({ date, name, description }) => {
    return (
        <li className="TimelineItem">
            <h3 className="TimelineItem__date">{date}</h3>
            <p className="TimelineItem__name">{name}</p>
            <p className="TimelineItem__description">{description}</p>
        </li>
    )
}

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
