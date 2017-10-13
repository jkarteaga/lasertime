import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import articleIcon from './src/icon-article.svg'
import interviewIcon from './src/icon-interview.svg'
import interviewTypeText from './src/text-interview.svg'
import articleTypeText from './src/text-article.svg'

function ArticlePreview({ type, image, title, description, path }) {
    const TypeIcon = type === 'interview' ? interviewIcon : articleIcon
    const TypeText = type === 'interview' ? interviewTypeText : articleTypeText

    return (
        <Link to={path}>
            <div className="ArticlePreview">
                <div
                    className={`ArticlePreview__article-type ArticlePreview__article-type--${
                        type
                    }`}
                >
                    <div className="ArticlePreview__article-type-icon">
                        <img src={TypeIcon} />
                    </div>
                    <div className="ArticlePreview__article-type-text">
                        <img src={TypeText} />
                    </div>
                </div>
                <div className="ArticlePreview__img">
                    <img src={image} />
                </div>
                <div className="ArticlePreview__content">
                    <div className="ArticlePreview__title">
                        <span>{title}</span>
                    </div>
                    <div className="ArticlePreview__description">
                        {description}
                    </div>
                    <div className="ArticlePreview__link">Читать полностью</div>
                </div>
            </div>
        </Link>
    )
}

ArticlePreview.propTypes = {
    type: PropTypes.oneOf(['article', 'interview']),
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

ArticlePreview.defaultProps = {
    type: 'article',
    image: 'https://placeimg.com/180/180/any',
    description:
        'Nunc id mi vitae tellus semper tincidunt eget et eros. Phasellus placerat tellus quis sapien bibendum, ac tincidunt enim ornare. Etiam cursus justo eu orci consequat, sit amet pellentesque ante blandit.',
}

export default ArticlePreview
