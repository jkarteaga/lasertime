import React  from 'react'
import InfoPanel from '../../components/contacts/ContactsInfoPanel'
import NavPanel from '../../components/contacts/ContactsNavPanel'

function Contacts(props) {
    return (
        <div className="Contacts">
            <InfoPanel/>
            <NavPanel/>
        </div>
    )
}

Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
