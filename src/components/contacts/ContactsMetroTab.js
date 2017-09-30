import React from 'react'
import ContactsSVGMap from './ContactsSVGMap'
import ContactsPhotoModal from './ContactsPhotoModal'

class ContactsMetroTab extends React.Component {
    state = {
        photoModalIsOpen: false,
    }

    handleModalClose = () => {
        this.state.photoModalIsOpen &&
            this.setState({ photoModalIsOpen: false })
    }

    handleModalOpen = () => {
        this.state.photoModalIsOpen || this.setState({ photoModalIsOpen: true })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleModalOpen}>
                    Проход по фотографиям
                </button>
                <ContactsSVGMap />
                <ContactsPhotoModal
                    display={this.state.photoModalIsOpen}
                    toggleClose={this.handleModalClose}
                />
            </div>
        )
    }
}

ContactsMetroTab.propTypes = {}
ContactsMetroTab.defaultProps = {}

export default ContactsMetroTab
