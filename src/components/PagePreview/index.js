import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


function PagePreview(props) {
    return (
        <div>
            <Link to={props.article.data.path}>{props.article.data.title}</Link>
        </div>
    )
}

PagePreview.propTypes = {
    article: PropTypes.object.isRequired
}
PagePreview.defaultProps = {}

export default PagePreview
