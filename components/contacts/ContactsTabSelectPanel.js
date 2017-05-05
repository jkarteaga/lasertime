import React, { PropTypes } from 'react'

function ContactsTabSelectPanel(props) {
    return (
        <div className="ContactsTabSelect">
            ContactsTabSelectPanel
            <div className="ContactsTabSelect__group">
                <label className="ContactsTabSelect__option ContactsTabSelect__option--active">
                    <input type="radio" name="ContactsTabSelect" />
                    пешком по карте
                </label>
                <label className="ContactsTabSelect__option">
                    <input type="radio" name="ContactsTabSelect" />
                    пешком по фото
                </label>
                <label className="ContactsTabSelect__option">
                    <input type="radio" name="ContactsTabSelect" />
                    пешком по видео
                </label>
            </div>
            <label className="ContactsTabSelect__option">
                <input type="radio" name="ContactsTabSelect" />
                на машине
            </label>
            <label className="ContactsTabSelect__option">
                <input type="radio" name="ContactsTabSelect" />
                на такси
            </label>
        </div>
    )
}

ContactsTabSelectPanel.propTypes = {}
ContactsTabSelectPanel.defaultProps = {}

export default ContactsTabSelectPanel
