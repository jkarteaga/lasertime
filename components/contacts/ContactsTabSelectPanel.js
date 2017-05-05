import React, { PropTypes } from 'react'

function ContactsTabSelectPanel() {
    return (
        <div >

            <ul className="ContactsTabSelectPanel">

                <li className="ContactsTabSelectPanel__option ContactsTabSelectPanel__option--active ContactsTabSelectPanel__option--hovered">
                    <span>пешком по карте</span>
                    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#ccc">
                        <polygon points="12 26 19 20 32 33 45 19 52 26 32 47" />
                    </svg>

                    <ul className="ContactsTabSelectPanelGroup ContactsTabSelectPanelGroup--opened">
                        <li className="ContactsTabSelectPanelGroup__option">
                            <span>пешком по фото</span>
                        </li>
                        <li className="ContactsTabSelectPanelGroup__option">
                            <span>пешком по видео</span>

                        </li>
                    </ul>

                </li>
                <li className="ContactsTabSelectPanel__option">
                    на машине
                </li>
                <li className="ContactsTabSelectPanel__option">
                    на такси
                </li>
            </ul>
        </div>
    )
}

ContactsTabSelectPanel.propTypes = {}
ContactsTabSelectPanel.defaultProps = {}

export default ContactsTabSelectPanel
