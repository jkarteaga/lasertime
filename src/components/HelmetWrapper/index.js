import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function HelmetWrapper({ data, title, description, keywords }) {
    return (
        <Helmet>
            <title>{title + ' | ' + data.site.siteMetadata.title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

HelmetWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
}
HelmetWrapper.defaultProps = {}

export default HelmetWrapper

export const pageFragment = graphql`
    fragment Helmet on RootQueryType {
        site {
            siteMetadata {
                title
            }
        }
    }
`
