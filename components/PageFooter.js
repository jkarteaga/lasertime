import React, { Component, PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'

class PageFooter extends Component {
    render() {
        return (
            <div className="PageFooter">
                <div className="PageFooter__wrapper">
                    Лицензия на осуществление медицинской деятельности <a href={prefixLink('/static/pdf/license.pdf')} target="_blank" rel="noopener noreferrer">№ ЛО-77-01-013289</a> от 18.10.2016 г.
                </div>
            </div>
        )
    }
}

PageFooter.propTypes = {}
PageFooter.defaultProps = {}

export default PageFooter
