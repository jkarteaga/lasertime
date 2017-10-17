import React from 'react'
import PropTypes from 'prop-types'

function Quote({ text, author }) {
    return (
        <blockquote className="Quote">
            <p className="Quote__text">{text}</p>
            <cite className="Quote__author">{author}</cite>
        </blockquote>
    )
}

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

Quote.defaultProps = {}

export default Quote
