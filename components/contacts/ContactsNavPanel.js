import React, { Component } from 'react'
import TabSelectPanel from './ContactsTabSelectPanel'

class ContactsNavPanel extends Component {
    state = {
        display: 'map' // map, photo, video, nav, taxi
    }

    render() {
        return (
            <div>
                <TabSelectPanel />
            </div>
        )
    }
}

export default ContactsNavPanel
