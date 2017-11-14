import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ArticleHeaderImage({ title, imgSizes, noEffects }) {
    const filterClassName = noEffects ? '' : 'ArticleHeaderImage__img--filter'
    return (
        <div className={'ArticleHeaderImage'}>
            <div className={`ArticleHeaderImage__img ${filterClassName}`}>
                <Img sizes={imgSizes} />
            </div>
            <h1 className={'ArticleHeaderImage__title'}>{title}</h1>
        </div>
    )
}

ArticleHeaderImage.propTypes = {
    title: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
    noEffects: PropTypes.bool,
}

ArticleHeaderImage.defaultProps = {
    noEffects: false,
}

export default ArticleHeaderImage
