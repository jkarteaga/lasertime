import React from 'react'
import PropTypes from 'prop-types'

export const GridItem = ({ icon, title, description }) => {
    return (
        <div className="AdvantagesGridItem">
            <div className="AdvantagesGridItem__header">
                <div className="AdvantagesGridItem__icon">
                    <img src={icon} />
                </div>
                <div className="AdvantagesGridItem__title">{title}</div>
            </div>
            <div className="AdvantagesGridItem__description">{description}</div>
        </div>
    )
}

GridItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export const Grid = ({ children }) => {
    return <div className="AdvantagesGrid">{children}</div>
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
}
