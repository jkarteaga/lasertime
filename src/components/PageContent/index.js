import React from 'react'

class PageContent extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="PageContent">
                {this.props.children}
                {/*<div className="PageContent__wrapper">*/}
                    {/**/}
                {/*</div>*/}
            </div>
        )
    }

}

PageContent.propTypes = {}
PageContent.defaultProps = {}

export default PageContent
