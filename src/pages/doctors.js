import React from 'react'
import Helmet from '../components/HelmetWrapper'
import PagePreview from '../components/PagePreview'

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
        <div className="PageContent__wrapper">
            <Helmet data={data} title="Врачи" description="" />
            <h1>Врачи</h1>
            {doctorsElements}
        </div>
    )
}

Doctors.propTypes = {}

Doctors.defaultProps = {}

export default Doctors

export const pageQuery = graphql`
    query Doctors {
        ...Helmet
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
