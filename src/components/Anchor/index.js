import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

function Anchor({ id }) {
    configureAnchors({ offset: -70, scrollDuration: 500 })
    return (
        <ScrollableAnchor id={id}>
            <div />
        </ScrollableAnchor>
    )
}

Anchor.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Anchor
