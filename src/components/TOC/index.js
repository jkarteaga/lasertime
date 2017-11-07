import React from 'react'
import PropTypes from 'prop-types'

function TOC({ children, title }) {
    const elements = children.map((element, id) => <li key={id}>{element}</li>)
    return (
        <section className={'TOC'}>
            <p className={'TOC__title'}>{title}</p>
            <ul className={'TOC__list'}>{elements}</ul>
        </section>
    )
}

TOC.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

TOC.defaultProps = {}

export default TOC
