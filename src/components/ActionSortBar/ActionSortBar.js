import React, { PropTypes } from 'react'

function ActionSortBar({ sortType, changeSortType }) {

    const baseClass = 'ActionSortBar__toggle'
    const defaultClass = baseClass + (sortType === 'default' ? ' ActionSortBar__toggle--active' : '')
    const discountClass = baseClass + (sortType === 'discount' ? ' ActionSortBar__toggle--active' : '')
    const priceClass = baseClass + (sortType === 'price' ? ' ActionSortBar__toggle--active' : '')

    return (
        <div className="ActionSortBar">
            <div className="ActionSortBar__wrapper">
                <div className="ActionSortBar__title">Сортировка:</div>
                <div
                    className={defaultClass}
                    onClick={() => changeSortType('default')}
                >
                    по типу
                </div>
                <div
                    className={discountClass}
                    onClick={() => changeSortType('discount')}
                >
                    по выгоде
                </div>
                <div
                    className={priceClass}
                    onClick={() => changeSortType('price')}
                >
                    по цене
                </div>
            </div>
        </div>
    )
}

ActionSortBar.propTypes = {
    sortType: PropTypes.string.isRequired,
    changeSortType: PropTypes.func.isRequired
}
ActionSortBar.defaultProps = {}

export default ActionSortBar
