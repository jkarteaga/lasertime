import React, { PropTypes } from 'react'

function PhoneList({ items }) {
    const phones = items.map((phone, id) => {
        const re = /^(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)$/i
        const arr = phone.toString().match(re)
        const formattedPhone = `8 (${arr[2]}) ${arr[3]}-${arr[4]}`
        return (
            <div key={phone} className="PhoneList__item">
                <span
                    className={id ?
                        'PhoneList__icon PhoneList__icon--fixed'
                        :
                        'PhoneList__icon PhoneList__icon--mobile'}
                />
                <a
                    href={`tel:+7${arr.slice(2, 5).join('')}`}
                    className="PhoneList__link"
                >
                    {formattedPhone}
                </a>
            </div>
        )
    })
    return (
        <div className="PhoneList">
            <div className="PhoneList__items">
                {phones}
            </div>
        </div>
    )
}

PhoneList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number).isRequired
}
PhoneList.defaultProps = {}

export default PhoneList
