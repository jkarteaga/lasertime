import React, { PropTypes } from 'react'

function PageContent(props) {
    return (
        <div className="page-content">
            <div className="page-content__wrapper">
                {props.children}
            </div>
        </div>
    )
}

PageContent.propTypes = {}
PageContent.defaultProps = {}

export default PageContent
