import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ArticleHeaderImage({
    title,
    imgSizes,
    alignLeft,
    alignRight,
    noEffects,
}) {
    const filterClassName = noEffects ? '' : 'ArticleHeaderImage__img--filter'
    let alignClassName = ''

    if (alignLeft) {
        alignClassName = 'ArticleHeaderImage__title--align-left'
    } else if (alignRight) {
        alignClassName = 'ArticleHeaderImage__title--align-right'
    }

    return (
        <div className={'ArticleHeaderImage'}>
            <div className={`ArticleHeaderImage__img ${filterClassName}`}>
                <Img sizes={imgSizes} />
            </div>
            <h1 className={`ArticleHeaderImage__title ${alignClassName}`}>
                {title}
            </h1>
        </div>
    )
}

ArticleHeaderImage.propTypes = {
    title: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
    alignLeft: PropTypes.bool,
    alignRight: PropTypes.bool,
    noEffects: PropTypes.bool,
}

ArticleHeaderImage.defaultProps = {
    alignLeft: false,
    alignRight: false,
    noEffects: false,
}

export default ArticleHeaderImage
