import React from 'react'
import Helmet from '../components/HelmetWrapper'
import InfoPanel from '../components/contacts/ContactsInfoPanel'
import NavPanel from '../components/contacts/ContactsNavPanel'

function Contacts({ data }) {
    return (
        <div>
            <Helmet data={data} title="Контакты" description="" />
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

export const pageQuery = graphql`
    query Contacts {
        ...Helmet
    }
`
