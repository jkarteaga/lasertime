import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

function ArticleAuthorBlock({ image, name, description, link }) {
    return (
        <div className="ArticleAuthor">
            <div className="ArticleAuthor__header">
                <div className="ArticleAuthor__header-wrapper">
                    <div className="ArticleAuthor__img">
                        <img src={image} />
                    </div>
                    <div className="ArticleAuthor__name">{name}</div>
                </div>
            </div>
            <div className="ArticleAuthor__body">
                <div className="ArticleAuthor__title">
                    <div className="ArticleAuthor__title-wrapper">
                        Об авторе
                    </div>
                </div>
                <div className="ArticleAuthor__description">{description}</div>
                <div className="ArticleAuthor__link">
                    <Link to={link}>Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

ArticleAuthorBlock.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

ArticleAuthorBlock.defaultProps = {
    image: '/img/articles/legun-alla-author.jpg',
    name: 'Легун Алла Александровна',
    description:
        'Sed enim arcu, tempus ac risus sed, tincidunt luctus augue. Aliquam sit amet purus metus. Curabitur quis pellentesque odio. Integer ullamcorper lorem id lectus tristique, at cursus mauris consectetur. Sed urna dolor, aliquet ac ante sed, luctus sollicitudin massa. Aenean velit ipsum, rhoncus vel nulla at, faucibus euismod nunc. Sed ut interdum enim.',
    link: '/doctors/legun-alla/',
}

export default ArticleAuthorBlock
