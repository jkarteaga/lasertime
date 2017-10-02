import React from 'react'
import PropTypes from 'prop-types'
import { PhotoSwipe } from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'

let options = {
    //http://photoswipe.com/documentation/options.html
}

const ContactsPhotoModal = ({ isOpen, toggleClose, images }) => {
    return (
        <div>
            <PhotoSwipe
                isOpen={isOpen}
                items={images}
                options={options}
                onClose={toggleClose}
            />
        </div>
    )
}

ContactsPhotoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleClose: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired
}
ContactsPhotoModal.defaultProps = {}

export default ContactsPhotoModal
