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
            <div className="TimelineItem__date">
                <h3>{date}</h3>
            </div>
            <div className="TimelineItem__name">
                <p>{name}</p>
            </div>
            <div className="TimelineItem__description">
                <p>{description}</p>
            </div>
        </li>
    )
}

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
