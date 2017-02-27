import React, { PropTypes } from 'react'

class PageContent extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="PageContent">
                <div className="PageContent__wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

PageContent.propTypes = {}
PageContent.defaultProps = {}

export default PageContent
