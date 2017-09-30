import React from 'react'
import PropTypes from 'prop-types'
import { PhotoSwipe } from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'
import images from '../../../files/config/contacts-modal-images'

let options = {
    //http://photoswipe.com/documentation/options.html
}

const ContactsPhotoModal = ({ display, toggleClose }) => {
    return (
        <div>
            <PhotoSwipe
                isOpen={display}
                items={images}
                options={options}
                onClose={toggleClose}
            />
        </div>
    )
}

ContactsPhotoModal.propTypes = {}
ContactsPhotoModal.defaultProps = {}

export default ContactsPhotoModal
