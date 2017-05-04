import React, { Component } from 'react'
import SelectPanel from './TabSelectPanel'

class ContactsNavPanel extends Component {
    state = {
        display: 'map' // map, photo, video, nav, taxi
    }

    render() {
        return (
            <div>
                <SelectPanel />
            </div>
        )
    }
}

export default ContactsNavPanel
