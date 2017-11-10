import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Modal from '../Modal/index'

function ServiceStats({
    durationText,
    durationModal,
    priceText,
    priceLink,
    quantityText,
    quantityModal,
}) {
    return (
        <div className={'ServiceStats'}>
            <div className="ServiceStats__item">
                <div className="ServiceStats__icon ServiceStats__icon--duration" />
                <div className="ServiceStats__body">
                    <div className="ServiceStats__heading">
                        Длительность процедуры
                    </div>
                    <div className="ServiceStats__text">{durationText}</div>
                    <div className="ServiceStats__link">
                        {durationModal ? (
                            <Modal
                                text={'Подробнее'}
                                title={'Длительность процедуры'}
                            >
                                {durationModal}
                            </Modal>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="ServiceStats__item">
                <div className="ServiceStats__icon ServiceStats__icon--money" />
                <div className="ServiceStats__body">
                    <div className="ServiceStats__heading">
                        Стоимость процедуры
                    </div>
                    <div className="ServiceStats__text">{priceText}</div>
                    <div className="ServiceStats__link">
                        <Link to={priceLink}>Узнать цены</Link>
                    </div>
                </div>
            </div>
            <div className="ServiceStats__item">
                <div className="ServiceStats__icon ServiceStats__icon--quantity" />
                <div className="ServiceStats__body">
                    <div className="ServiceStats__heading">
                        Кол-во процедур в курсе
                    </div>
                    <div className="ServiceStats__text">{quantityText}</div>
                    <div className="ServiceStats__link">
                        {quantityModal ? (
                            <Modal
                                text={'Подробнее'}
                                title={'Кол-во процедур в курсе'}
                            >
                                {quantityModal}
                            </Modal>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

ServiceStats.propTypes = {
    durationText: PropTypes.string.isRequired,
    durationModal: PropTypes.node,
    priceText: PropTypes.string.isRequired,
    priceLink: PropTypes.string.isRequired,
    quantityText: PropTypes.string.isRequired,
    quantityModal: PropTypes.node,
}

ServiceStats.defaultProps = {}

export default ServiceStats
