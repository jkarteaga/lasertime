import React from 'react'
import Helmet from 'react-helmet'
import ArticleAuthorBlock from '../components/ArticleAuthor'

class ArticleTemplate extends React.Component {
    render() {
        const article = this.props.data.markdownRemark
        return (
            <div className="PageContent__wrapper">
                <Helmet title={article.frontmatter.title} />
                <h1>{article.frontmatter.title}</h1>
                <ArticleAuthorBlock />
                <div dangerouslySetInnerHTML={{ __html: article.html }} />
            </div>
        )
    }
}

ArticleTemplate.propTypes = {}
ArticleTemplate.defaultProps = {}

export default ArticleTemplate

export const pageQuery = graphql`
    query ArticleByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
