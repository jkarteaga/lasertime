import React, { PropTypes } from 'react'
import { getArticles } from '../../utils/helpers'
import PagePreview from '../../components/PagePreview'

function ArticleList(props, context) {

    const articles = getArticles(props.route.pages)
    const articlesElements = articles.map((article) => {
        return <PagePreview article={article} />
    })

    return (
        <div>
            <h1>Статьи</h1>
            {articlesElements}</div>
    )
}

ArticleList.contextTypes = {
    router: PropTypes.object.isRequired
}
ArticleList.propTypes = {
    route: PropTypes.object.isRequired
}
ArticleList.defaultProps = {}

export default ArticleList
