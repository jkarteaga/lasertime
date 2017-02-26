import React, { PropTypes } from 'react'
import MenuItem from './MenuItem'

function HeaderMenu({ position, items }) {
    const links = items.map((item, id) => <MenuItem
        key={id}
        path={item[0]}
        name={item[1]}
    />)

    return (
        <ul className={position === 'left' ? 'page-header__menu-left' : 'page-header__menu-right'}>{ links }</ul>
    )
}

HeaderMenu.propTypes = {
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}
HeaderMenu.defaultProps = {}

export default HeaderMenu
