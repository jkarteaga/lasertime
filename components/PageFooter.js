import React, { Component, PropTypes } from 'react'

class PageFooter extends Component {
    render() {
        return (
            <div className="PageFooter">
                <div className="PageFooter__wrapper">
                    Лицензия на осуществление медицинской деятельности №123456
                </div>
            </div>
        )
    }
}

PageFooter.propTypes = {}
PageFooter.defaultProps = {}

export default PageFooter
