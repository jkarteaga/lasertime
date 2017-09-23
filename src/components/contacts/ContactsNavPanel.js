import React from 'react'
import TabSelectPanel from './ContactsTabSelectPanel'
import SVGMapTab from './ContactsSVGMapTab'
import GMapTab from './ContactsGMapTab'
import PhotoTab from './ContactsPhotoTab'
import VideoTab from './ContactsVideoTab'
import TaxiTab from './ContactsTaxiTab'

class ContactsNavPanel extends React.Component {
    state = {
        display: 'gmap' // svgmap, photo, video, gmap, taxi
    }

    getActiveTabElement = (mode) => {
        switch (mode) {
        case 'svgmap':
            return <SVGMapTab />
        case 'photo':
            return <PhotoTab />
        case 'video':
            return <VideoTab />
        case 'gmap':
            return <GMapTab />
        case 'taxi':
            return <TaxiTab />
        default:
            return null
        }
    }

    toggleChangeMode = (newMode) => {
        if (newMode !== this.state.display) {
            this.setState({
                display: newMode
            })
        }
    }

    render() {

        const activeTabElement = this.getActiveTabElement(this.state.display)

        return (
            <div className="ContactsNavPanel">
                { activeTabElement }
                <TabSelectPanel activeMode={this.state.display} changeMode={this.toggleChangeMode} />
            </div>
        )
    }
}

export default ContactsNavPanel
