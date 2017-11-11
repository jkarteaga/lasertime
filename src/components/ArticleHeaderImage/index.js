import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ArticleHeaderImage({ title, imgSizes }) {
    return (
        <div className={'ArticleHeaderImage'}>
            <Img sizes={imgSizes} />
            <h1 className={'ArticleHeaderTitle'}>{title}</h1>
        </div>
    )
}

ArticleHeaderImage.propTypes = {
    title: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
}

ArticleHeaderImage.defaultProps = {}

export default ArticleHeaderImage
