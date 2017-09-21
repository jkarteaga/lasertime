import React from 'react'


class PageFooter extends React.Component {
    render() {
        return (
            <div className="PageFooter">
                <div className="PageFooter__wrapper">
                    Лицензия на осуществление медицинской деятельности <a href={'/static/pdf/licence.pdf'}
                                                                          target="_blank" rel="noopener noreferrer">№
                    ЛО-77-01-013289</a> от 18.10.2016 г.
                </div>
            </div>
        )
    }
}

PageFooter.propTypes = {}
PageFooter.defaultProps = {}

export default PageFooter
