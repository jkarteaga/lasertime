import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ArticleHeaderImage({ title, imgSizes }) {
    return (
        <div className={'ArticleHeaderImage'}>
            <div className="ArticleHeaderImage__img">
                <Img sizes={imgSizes} />
            </div>
            <h1 className={'ArticleHeaderImage__title'}>{title}</h1>
        </div>
    )
}

ArticleHeaderImage.propTypes = {
    title: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
}

ArticleHeaderImage.defaultProps = {}

export default ArticleHeaderImage
