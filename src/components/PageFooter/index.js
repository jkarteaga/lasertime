import React from 'react'
import Link from 'gatsby-link'

class PageFooter extends React.Component {
    render() {
        return (
            <div className="PageFooter">
                <div className="PageFooter__wrapper">
                    <div className="PageFooter__licence">
                        Лицензия на осуществление медицинской деятельности{' '}
                        <span style={{ whiteSpace: 'noWrap' }}>
                            <Link
                                to={'/pdf/licence.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                № ЛО-77-01-013289
                            </Link>
                        </span>{' '}
                        от 18.10.2016 г.
                    </div>
                    <div className="PageFooter__warning">
                        Использовании любых материалов сайта без
                        предварительного согласования с администрацией
                        запрещено.
                    </div>
                    <div className="PageFooter__copyright">
                        © 2018 Клиника “Знак Качества”.{' '}
                        <span className="PageFooter__copyright-text">
                            {' '}
                            Все авторские права защищены.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

PageFooter.propTypes = {}
PageFooter.defaultProps = {}

export default PageFooter
