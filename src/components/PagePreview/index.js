import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


function PagePreview({title, path}) {
    return (
        <div>
            <Link to={path}>{title}</Link>
        </div>
    )
}

PagePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}
PagePreview.defaultProps = {}

export default PagePreview
