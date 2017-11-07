import React from 'react'
import PropTypes from 'prop-types'

function TOC({ children, title }) {
    const elements = children.map((element, id) => (
        <li className={'TOC__item'} key={id}>
            {element}
        </li>
    ))
    return (
        <section className={'TOC'}>
            <p className={'TOC__title'}>{title}</p>
            <ol className={'TOC__list'}>{elements}</ol>
        </section>
    )
}

TOC.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

TOC.defaultProps = {}

export default TOC
