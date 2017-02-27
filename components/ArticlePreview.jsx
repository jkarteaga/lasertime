import React, { PropTypes } from 'react'
import { Link } from 'react-router'


function ArticlePreview(props) {
    return (
        <div>
            <Link to={props.article.data.path}>{props.article.data.title}</Link>
        </div>
    )
}

ArticlePreview.propTypes = {
    article: PropTypes.object.isRequired
}
ArticlePreview.defaultProps = {}

export default ArticlePreview
