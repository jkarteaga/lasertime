import React from 'react'
import { PhotoSwipe } from 'react-photoswipe'

import 'react-photoswipe/lib/photoswipe.css'

let isOpen = true

let items = [
    {
        src: 'http://lorempixel.com/1200/900/sports/1',
        w: 1200,
        h: 900,
        title: 'Image 1',
    },
    {
        src: 'http://lorempixel.com/1200/900/sports/2',
        w: 1200,
        h: 900,
        title: 'Image 2',
        caption: 'Hello!!!',
    },
]

let options = {
    //http://photoswipe.com/documentation/options.html
}

let handleClose = () => {
    isOpen: false
}

class ContactsPhotoTab extends React.Component {
    render() {
        return (
            <PhotoSwipe
                isOpen={isOpen}
                items={items}
                options={options}
                onClose={handleClose}
            />
        )
    }
}

ContactsPhotoTab.propTypes = {}
ContactsPhotoTab.defaultProps = {}

export default ContactsPhotoTab
