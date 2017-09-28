import React from 'react'
import PagePreview from '../../components/PagePreview'
import Helmet from 'react-helmet'

function ArticleList({ data }) {
    const articlesElements = data.allMarkdownRemark.edges.map(({ node }) => {
        return (
            <PagePreview
                key={node.internal.contentDigest}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
            />
        )
    })

    return (
        <div className="PageContent__wrapper">
            <Helmet title={'Статьи'} />
            <h1>Статьи</h1>
            {articlesElements}
        </div>
    )
}

// ArticleList.contextTypes = {
//     router: PropTypes.object.isRequired
// }
// ArticleList.propTypes = {
//     route: PropTypes.object.isRequired
// }
// ArticleList.defaultProps = {}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        allMarkdownRemark(filter: { fields: { group: { eq: "articles" } } }) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`
