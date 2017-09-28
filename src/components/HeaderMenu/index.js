import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../HeaderMenuItem'

function HeaderMenu({ position, items }) {
    const links = items.map((item, id) => (
        <MenuItem key={id} path={item.path} name={item.name} />
    ))

    return (
        <nav
            className={`HeaderMenu ${position === 'left'
                ? 'HeaderMenu--left'
                : 'HeaderMenu--right'}`}
        >
            <ul className="HeaderMenu__items">{links}</ul>
        </nav>
    )
}

HeaderMenu.propTypes = {
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
HeaderMenu.defaultProps = {}

export default HeaderMenu
