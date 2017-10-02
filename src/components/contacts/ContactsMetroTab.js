import React from 'react'
import ContactsSVGMap from './ContactsSVGMap'
import ContactsPhotoModal from './ContactsPhotoModal'
import {
    ImagesPath1,
    ImagesPath2,
} from '../../files/config/contacts-modal-images'

class ContactsMetroTab extends React.Component {
    state = {
        photoModalIsOpen: false,
        imagesPath: 1,
    }

    handleModalClose = () => {
        this.state.photoModalIsOpen &&
            this.setState({ photoModalIsOpen: false })
    }

    handleModalOpen = imagesPath => {
        this.state.photoModalIsOpen ||
            this.setState({ photoModalIsOpen: true, imagesPath })
    }

    render() {
        return (
            <div>
                <ContactsSVGMap toggleModalOpen={this.handleModalOpen} />
                {/*<button onClick={this.handleModalOpen}>*/}
                {/*Проход по фотографиям*/}
                {/*</button>*/}
                <ContactsPhotoModal
                    isOpen={this.state.photoModalIsOpen}
                    toggleClose={this.handleModalClose}
                    images={
                        this.state.imagesPath === 1 ? ImagesPath1 : ImagesPath2
                    }
                />
            </div>
        )
    }
}

ContactsMetroTab.propTypes = {}
ContactsMetroTab.defaultProps = {}

export default ContactsMetroTab
