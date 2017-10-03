import React from 'react'
import PropTypes from 'prop-types'

const ContactsTabSelectPanel = ({ activeMode, changeMode }) => {
    const activeClassName = 'ContactsTabSelectPanel__option--active'

    return (
        <ul className="ContactsTabSelectPanel">
            <li
                className={`ContactsTabSelectPanel__option ${activeMode ===
                'metro'
                    ? activeClassName
                    : ''}`}
                onClick={() => changeMode('metro')}
            >
                на метро
            </li>
            <li
                className={`ContactsTabSelectPanel__option ${activeMode ===
                'nav'
                    ? activeClassName
                    : ''}`}
                onClick={() => changeMode('nav')}
            >
                на машине
            </li>
            <li
                className={`ContactsTabSelectPanel__option ${activeMode ===
                'taxi'
                    ? activeClassName
                    : ''}`}
                onClick={() => changeMode('taxi')}
            >
                на такси
            </li>
        </ul>
    )
}

ContactsTabSelectPanel.propTypes = {
    activeMode: PropTypes.string.isRequired,
    changeMode: PropTypes.func.isRequired,
}
ContactsTabSelectPanel.defaultProps = {}

export default ContactsTabSelectPanel
