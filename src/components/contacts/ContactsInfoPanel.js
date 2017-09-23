import React from 'react'

function ContactsInfoPanel() {
    return (
        <div className="ContactsInfoPanel">
            <div className="ContactsInfoPanel__item">
                <div className="ContactsInfoPanel__icon ContactsInfoPanel__icon--phone">Phone</div>
                <div className="ContactsInfoPanel__phone">8 (905) 588 13 13</div>
            </div>
            <div className="ContactsInfoPanel__item">
                <div className="ContactsInfoPanel__icon ContactsInfoPanel__icon--address">Address</div>
                <div className="ContactsInfoPanel__address">Москва, Рыбников переулок, дом 4</div>

            </div>
            <div className="ContactsInfoPanel__item">
                <div className="ContactsInfoPanel__icon ContactsInfoPanel__icon--email">Email</div>
                <div className="ContactsInfoPanel__email">info@lasertime.ru</div>
            </div>
        </div>
    )
}

ContactsInfoPanel.propTypes = {}
ContactsInfoPanel.defaultProps = {}

export default ContactsInfoPanel
