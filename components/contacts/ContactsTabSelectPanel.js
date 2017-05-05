import React, { PropTypes } from 'react'

function ContactsTabSelectPanel(props) {
    return (
        <div className="ContactsTabSelectPanel">

            <label className="ContactsTabSelectPanel__option ContactsTabSelectPanel__option--active ContactsTabSelectPanel__option--hovered">
                <input type="radio" name="ContactsTabSelect" />
                пешком по карте
            </label>

            <div className="ContactsTabSelectPanelGroup ContactsTabSelectPanelGroup--opened">
                <label className="ContactsTabSelectPanelGroup__option">
                    <input type="radio" name="ContactsTabSelect" />
                    пешком по фото
                </label>
                <label className="ContactsTabSelectPanelGroup__option">
                    <input type="radio" name="ContactsTabSelect" />
                    пешком по видео
                </label>
            </div>

            <label className="ContactsTabSelectPanel__option">
                <input type="radio" name="ContactsTabSelect" />
                на машине
            </label>
            <label className="ContactsTabSelectPanel__option">
                <input type="radio" name="ContactsTabSelect" />
                на такси
            </label>
        </div>
    )
}

ContactsTabSelectPanel.propTypes = {}
ContactsTabSelectPanel.defaultProps = {}

export default ContactsTabSelectPanel
