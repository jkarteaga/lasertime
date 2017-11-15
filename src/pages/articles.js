import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

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
        <div>
            <Helmet data={data} title="Статьи" description="" />
            <ArticleHeaderImage
                title={'Статьи'}
                imgSizes={data.blank.sizes}
                alignRight
                noEffects
            />
            <div className="PageContent__wrapper">{articlesElements}</div>
        </div>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
        blank: imageSharp(id: { regex: "/articles-header/" }) {
            sizes(maxWidth: 960, quality: 60) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
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
