import React from 'react'
import ContactsSVGMap from './ContactsSVGMap'
import ContactsPhotoModal from '../PhotoModal'
import PathImages from '../../files/config/contacts-path-images'

class ContactsMetroTab extends React.Component {
    state = {
        photoModalIsOpen: false,
        path: 'bottom',
    }

    render() {
        return (
            <div>
                <ContactsSVGMap toggleModalOpen={this.handleModalOpen} />
                <ContactsPhotoModal
                    isOpen={this.state.photoModalIsOpen}
                    toggleClose={this.handleModalClose}
                    images={PathImages[this.state.path]}
                />
            </div>
        )
    }

    handleModalClose = () => {
        this.state.photoModalIsOpen &&
            this.setState({ photoModalIsOpen: false })
    }

    handleModalOpen = path => {
        this.state.photoModalIsOpen ||
            this.setState({ photoModalIsOpen: true, path: path })
    }
}

ContactsMetroTab.propTypes = {}
ContactsMetroTab.defaultProps = {}

export default ContactsMetroTab
