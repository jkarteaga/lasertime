import React from 'react'
import TabSelectPanel from './ContactsTabSelectPanel'
import SVGMapTab from './ContactsSVGMapTab'
import GMapTab from './ContactsNavTab'
import TaxiTab from './ContactsTaxiTab'

class ContactsNavPanel extends React.Component {
    state = {
        display: 'svgmap', // svgmap, nav, taxi
    }

    getActiveTabElement = mode => {
        switch (mode) {
            case 'svgmap':
                return <SVGMapTab />
            case 'navmap':
                return <GMapTab />
            case 'taxi':
                return <TaxiTab />
            default:
                return null
        }
    }

    toggleChangeMode = newMode => {
        if (newMode !== this.state.display) {
            this.setState({
                display: newMode,
            })
        }
    }

    render() {
        const activeTabElement = this.getActiveTabElement(this.state.display)

        return (
            <div className="ContactsNavPanel">
                {activeTabElement}
                <TabSelectPanel
                    activeMode={this.state.display}
                    changeMode={this.toggleChangeMode}
                />
            </div>
        )
    }
}

export default ContactsNavPanel
