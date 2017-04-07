import React, { PropTypes } from 'react'

function ActionSortBar({ sortType, changeSortType }) {
    return (
        <div className="ActionSortBar">
            <span className="ActionSortBar__title">Сортировка:</span>
            <span
                className={'ActionSortBar__toggle' + (sortType === 'default' ? ' ActionSortBar__toggle--active' : '')}
                onClick={() => changeSortType('default')}>
                по умолчанию
            </span>
            <span
                className={'ActionSortBar__toggle' + (sortType === 'discount' ? ' ActionSortBar__toggle--active' : '')}
                onClick={() => changeSortType('discount')}>
                по выгоде
            </span>
            <span
                className={'ActionSortBar__toggle' + (sortType === 'price' ? ' ActionSortBar__toggle--active' : '')}
                onClick={() => changeSortType('price')}>
                по цене
            </span>
        </div>
    )
}

ActionSortBar.propTypes = {
    sortType: PropTypes.string.isRequired,
    changeSortType: PropTypes.func.isRequired
}
ActionSortBar.defaultProps = {}

export default ActionSortBar
