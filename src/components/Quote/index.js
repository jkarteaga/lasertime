import React from 'react'
import PropTypes from 'prop-types'

function Quote({ text, author }) {
    return (
        <blockquote className="Quote">
            <div className="Quote__text">
                <p className="Quote__text-wrapper">{text}</p>
            </div>
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
