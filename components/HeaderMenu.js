import React, { PropTypes } from 'react'
import MenuItem from './HeaderMenuItem'

function HeaderMenu({ position, items }) {
    const links = items.map((item, id) => <MenuItem
        key={id}
        path={item[0]}
        name={item[1]}
    />)

    return (
        <div className={`HeaderMenu ${position === 'left' ? 'HeaderMenu--left' : 'HeaderMenu--right'}`}>
            <ul className="HeaderMenu__items">
                { links }
            </ul>
        </div>
    )
}

HeaderMenu.propTypes = {
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}
HeaderMenu.defaultProps = {}

export default HeaderMenu
