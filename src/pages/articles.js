import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function ArticleList({ data }) {
    // const articlesElements = data.allMarkdownRemark.edges.map(({ node }) => {
    //     console.log('---', node.frontmatter)
    //     if (node.frontmatter.imageName) {
    //         const imageRes = data[node.frontmatter.imageName].resolutions
    //         return (
    //             <ArticlePreview
    //                 key={node.internal.contentDigest}
    //                 title={node.frontmatter.title}
    //                 path={node.frontmatter.path}
    //                 imageRes={imageRes && imageRes}
    //             />
    //         )
    //     }
    //
    //     return (
    //         <ArticlePreview
    //             key={node.internal.contentDigest}
    //             title={node.frontmatter.title}
    //             path={node.frontmatter.path}
    //         />
    //     )
    // })

    return (
        <div>
            <Helmet data={data} title="Статьи" description="" />
            <ArticleHeaderImage
                title={'Статьи'}
                imgSizes={data.articlesHeader.sizes}
                alignRight
                noEffects
            />

            <div className="PageContent__wrapper">
                <ArticlePreview
                    title={'Всё, что нужно знать о чистке лица'}
                    path={'/articles/face-cleansing-interview/'}
                    imageRes={data.faceCleansingInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о лазерной эпиляции'}
                    path={'/articles/laser-epilation-interview/'}
                    imageRes={data.laserEpilationInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о PRP плазмолифтинге'}
                    path={'/articles/plazmolifting-interview/'}
                    imageRes={data.plazmoliftingInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о фракционном DOT омоложении'}
                    path={'/articles/dot-rejuvenation-interview/'}
                    imageRes={data.dotRejuvenationInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
            </div>
        </div>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
        articlesHeader: imageSharp(id: { regex: "/articles-header/" }) {
            sizes(maxWidth: 960, quality: 60) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        # Preview images
        faceCleansingInterview: imageSharp(
            id: { regex: "/face-cleansing-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        laserEpilationInterview: imageSharp(
            id: { regex: "/laser-epilation-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        plazmoliftingInterview: imageSharp(
            id: { regex: "/plazmolifting-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        dotRejuvenationInterview: imageSharp(
            id: { regex: "/dot-rejuvenation-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        # Markdown articles
        # allMarkdownRemark(filter: { fields: { group: { eq: "articles" } } }) {
        #     edges {
        #         node {
        #             internal {
        #                 contentDigest
        #             }
        #             frontmatter {
        #                 title
        #                 path
        #             }
        #         }
        #     }
        # }
    }
`
