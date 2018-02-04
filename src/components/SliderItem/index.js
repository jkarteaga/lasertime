import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function SliderItem({ imageSizes, title, align, color }) {
    const titleStyles = {
        color: color ? color : '#000',
    }
    return (
        <div className="SliderItem">
            <Img className="SliderItem__img" sizes={imageSizes} />
            <div
                style={titleStyles}
                className={`SliderItem__title SliderItem__title--${align}`}
            >
                {title}
            </div>
        </div>
    )
}

SliderItem.propTypes = {
    imageSizes: PropTypes.object.isRequired,
    // 'left' or 'right'
    title: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
    color: PropTypes.string,
}

SliderItem.defaultProps = {}

export default SliderItem
