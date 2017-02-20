import React, { PropTypes } from 'react'

function PhoneList({ items }) {
    const phones = items.map((phone, id) => {
        const re = /^(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)$/i
        const arr = phone.toString().match(re)
        const formattedPhone = `8 (${arr[2]}) ${arr[3]}-${arr[4]}`
        return (
            <a
                key={phone}
                href={`tel:+7${arr.slice(2, 5).join('')}`}
                className={id ? 'header__phone--bottom' : 'header__phone--top'}
            >
                {formattedPhone}
            </a>
        )
    })
    return (
        <div className="header__phones">{phones}</div>
    )
}

PhoneList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number).isRequired
}
PhoneList.defaultProps = {}

export default PhoneList
