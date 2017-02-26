import React, { PropTypes } from 'react'
import MenuItem from './MenuItem'

function HeaderMenu({ position, items }) {
    const links = items.map((item, id) => <MenuItem
        key={id}
        path={item[0]}
        name={item[1]}
    />)

    return (
        <div className={position === 'left' ? 'header-menu header-menu--left' : 'header-menu header-menu--right'}>
            <div className="header-menu__wrapper">
                <ul className="header-menu__items">
                    { links }
                </ul>
            </div>
        </div>
    )
}

HeaderMenu.propTypes = {
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}
HeaderMenu.defaultProps = {}

export default HeaderMenu
