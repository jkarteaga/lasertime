import React from 'react'
import PropTypes from 'prop-types'

function ActionDisplayModeBar({ changeDisplayMode, displayGrid }) {
    const baseClass = 'ActionDisplayModeBar__toggle'
    const gridClass = baseClass + (displayGrid ? ` ${baseClass}--active` : '')
    const tableClass = baseClass + (displayGrid ? '' : ` ${baseClass}--active`)
    return (
        <div className="ActionDisplayModeBar">
            <div
                className="ActionDisplayModeBar__wrapper"
                onClick={changeDisplayMode}
            >
                <div className={gridClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
                        <path d="M0 0h5v5H0zM6 0h5v5H6zM0 6h5v5H0zM6 6h5v5H6z" />
                    </svg>
                </div>
                <div className={tableClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
                        <path d="M0 0h11v2H0zM0 3h11v2H0zM0 6h11v2H0zM0 9h11v2H0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

ActionDisplayModeBar.propTypes = {
    changeDisplayMode: PropTypes.func.isRequired,
    displayGrid: PropTypes.bool.isRequired,
}
ActionDisplayModeBar.defaultProps = {}

export default ActionDisplayModeBar
