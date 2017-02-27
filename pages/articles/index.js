import React, { PropTypes } from 'react'
import { getArticles } from '../../utils/helpers'
import ArticlePreview from '../../components/ArticlePreview'

function Index(props, context) {
    console.log('---', props.route)
    const articles = getArticles(props.route.pages)
    const articlesElements = articles.map((article) => {
        return <ArticlePreview article={article} />
    })

    return (
        <div>{articlesElements}</div>
    )
}

Index.contextTypes = {
    router: PropTypes.object.isRequired
}
Index.propTypes = {
    route: PropTypes.object.isRequired
}
Index.defaultProps = {}

export default Index
