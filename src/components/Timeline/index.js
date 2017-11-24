import React from 'react'
import PropTypes from 'prop-types'

function Timeline({ title, children, certLink }) {
    return (
        <div className="Timeline">
            <h2 className="Timeline__title">{title}</h2>
            <ul className="Timeline__list">{children}</ul>
            {certLink ? (
                <div className="Timeline__certificates">
                    <a href={certLink} target={'_blank'} className="Timeline__certificates-button">
                        Посмотреть сертификаты
                    </a>
                </div>
            ) : null}
        </div>
    )
}

Timeline.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    certLink: PropTypes.string,
}

export default Timeline

export const TimelineItem = ({ date, name, description }) => {
    let descriptionElement = description

    if (Array.isArray(description)) {
        descriptionElement = (
            <ul className="TimelineItem__description-list">
                {description.map(item => (
                    <li className="TimelineItem__description-list-item">
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <li className="TimelineItem">
            <div className="TimelineItem__header">
                <h3 className="TimelineItem__date">{date}</h3>
            </div>
            <div className="TimelineItem__body">
                <p className="TimelineItem__name">{name}</p>
                <p className="TimelineItem__description">
                    {descriptionElement}
                </p>
            </div>
        </li>
    )
}

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}
