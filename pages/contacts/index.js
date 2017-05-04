import React, { PropTypes } from 'react'
import InfoPanel from '../../components/contacts/InfoPanel'
import NavPanel from '../../components/contacts/NavPanel'

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
