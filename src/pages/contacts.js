import React from 'react'
import InfoPanel from '../components/contacts/ContactsInfoPanel'
import NavPanel from '../components/contacts/ContactsNavPanel'

function Contacts(props) {
    return (
        <div>
            <h1>Контакты</h1>
            <div className="Contacts">
                <InfoPanel />
                <NavPanel />
            </div>
        </div>
    )
}

Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
