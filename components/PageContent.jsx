import React, { PropTypes } from 'react'

function PageContent(props) {
    return (
        <div className="PageContent">
            <div className="PageContent__wrapper">
                {props.children}
            </div>
        </div>
    )
}

PageContent.propTypes = {}
PageContent.defaultProps = {}

export default PageContent
