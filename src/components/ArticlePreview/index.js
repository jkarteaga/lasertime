import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

function ArticlePreview({ type, image, title, description, path }) {
    return (
        <div className="ArticlePreview">
            <div
                className={`ArticlePreview__article-type ArticlePreview__article-type--${
                    type
                }`}
            >
                <div className="ArticlePreview__article-type-icon">Icon</div>
                <div className="ArticlePreview__article-type-text">Text</div>
            </div>
            <div className="ArticlePreview__img">image</div>
            <div className="ArticlePreview__content">
                <div className="ArticlePreview__title">{title}</div>
                <div className="ArticlePreview__description">{description}</div>
                <div className="ArticlePreview__link">
                    <Link to={path}>Читать полностью</Link>
                </div>
            </div>
        </div>
    )
}

ArticlePreview.propTypes = {
    type: PropTypes.oneOf('article', 'interview'),
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

ArticlePreview.defaultProps = {}

export default ArticlePreview
