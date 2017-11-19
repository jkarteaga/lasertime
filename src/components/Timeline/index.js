import React from 'react'
import PropTypes from 'prop-types'

function Timeline({ title, children }) {
    return (
        <div className="Timeline">
            <h2 className="Timeline__title">{title}</h2>
            <ul className="Timeline__list">{children}</ul>
        </div>
    )
}

Timeline.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Timeline

export const TimelineItem = ({ date, name, description }) => {
    return (
        <li className="TimelineItem">
            <div className="TimelineItem__header">
                <h3 className="TimelineItem__date">{date}</h3>
            </div>
            <div className="TimelineItem__body">
                <p className="TimelineItem__name">{name}</p>
                <p className="TimelineItem__description">{description}</p>
            </div>
        </li>
    )
}

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
