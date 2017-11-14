import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'

function ArticleList({ data }) {
    const articlesElements = data.allMarkdownRemark.edges.map(({ node }) => {
        return (
            <ArticlePreview
                key={node.internal.contentDigest}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
            />
        )
    })

    return (
        <div className="PageContent__wrapper">
            <Helmet data={data} title="Статьи" description="" />
            <h1>Статьи</h1>
            {articlesElements}
        </div>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
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
