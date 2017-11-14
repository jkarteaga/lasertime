import React from 'react'
import Helmet from '../components/HelmetWrapper'
import PagePreview from '../components/PagePreview'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function Doctors({ data }) {
    const doctorsElements = data.allMarkdownRemark.edges.map(({ node }) => {
        return (
            <PagePreview
                key={node.internal.contentDigest}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
            />
        )
    })

    return (
        <div>
            <Helmet data={data} title="Врачи" description="" />
            <ArticleHeaderImage
                title={'Врачи'}
                imgSizes={data.blank.sizes}
                noEffects
            />
            <div className="PageContent__wrapper">{doctorsElements}</div>
        </div>
    )
}

Doctors.propTypes = {}

Doctors.defaultProps = {}

export default Doctors

export const pageQuery = graphql`
    query Doctors {
        ...Helmet
        blank: imageSharp(id: { regex: "/blank/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        allMarkdownRemark(filter: { fields: { group: { eq: "doctors" } } }) {
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
