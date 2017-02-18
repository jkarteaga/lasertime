import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'

function HeaderMenu(props) {
    return (
        <ul>
            <MenuItem path="/doctors/" name="Врачи" />
            <MenuItem path="/services/" name="Услуги" />
            <MenuItem path="/prices/" name="Цены" />
            <MenuItem path="/articles/" name="Статьи" />
            <MenuItem path="/news/" name="Новости" />
            <MenuItem path="/contacts/" name="Контакты" />
        </ul>
    )
}

HeaderMenu.propTypes = {}
HeaderMenu.defaultProps = {}

export default HeaderMenu
