import React from 'react'


class ArticleTemplate extends React.Component {
    render() {
        const article = this.props.data.markdownRemark
        return (
            <div className="PageContent__wrapper">
                <h1>{article.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: article.html}}></div>
            </div>
        )
    }
}

ArticleTemplate.propTypes = {}
ArticleTemplate.defaultProps = {}

export default ArticleTemplate

export const pageQuery = graphql`
query ArticleByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      title
    }
  }
}
`
