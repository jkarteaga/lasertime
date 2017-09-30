import React from 'react'
import ContactsSVGMap from './ContactsSVGMap'

class ContactsMetroTab extends React.Component {
    state = {
        photoModalIsOpen: false,
    }

    render() {
        return (
            <div>
                <button>Проход по фотографиям</button>
                <ContactsSVGMap />
            </div>
        )
    }
}

ContactsMetroTab.propTypes = {}
ContactsMetroTab.defaultProps = {}

export default ContactsMetroTab
