import React, { PropTypes } from 'react'

function PhoneList({ items }) {
    const phones = items.map((phone, id) => {
        const re = /^(\d)(\d\d\d)(\d\d\d)(\d\d)(\d\d)$/i
        const arr = phone.toString().match(re)
        const formattedPhone = `8 (${arr[2]}) ${arr[3]}-${arr[4]}-${arr[5]}`
        return (
            <div key={phone} className="PhoneList__item">

                <span className="PhoneList__icon">{id ?
                    <svg
                        className="PhoneList__icon--fixed"
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="37" viewBox="0 0 42 42">
                        <path
                            d="M20.8 6.87c6.92.07 11.26-.4 11.85 7.94h8.45C41.1 1.9 30.72.2 20.57.2S.04 1.9.04 14.8h8.4c.63-8.5 5.48-8 12.35-7.93zM4.23 18.97c2.06 0 3.77.13 4.16-2.07v-1.03H0c0 3.27 1.9 3.1 4.23 3.1zm28.47-3.1h-.08c0 .4.04.73.1 1.03.4 2.03 2.1 1.9 4.16 1.9 2.35 0 4.25.17 4.25-2.93H32.7z" />
                        <path
                            d="M28.57 13.64v-1.3c0-.58-.6-.6-1.38-.6h-1.3c-.8 0-1.4.02-1.4.6v2h-8.8v-2c0-.58-.6-.6-1.4-.6h-1.2c-.8 0-1.4.02-1.4.6v2.44c-2 2.26-8.6 11.9-8.8 13.06v7.77c0 .8.5 1.4 1.2 1.4h32c.6 0 1.2-.6 1.2-1.3v-7.9c-.3-1.1-6.8-10.7-8.8-13v-1.1zM15.34 28.88c-.64 0-1.16-.57-1.16-1.27 0-.7.52-1.2 1.16-1.2.64 0 1.17.6 1.17 1.3S16 29 15.4 29zm0-4.34c-.64 0-1.16-.57-1.16-1.27 0-.7.52-1.27 1.16-1.27.64 0 1.17.57 1.17 1.27 0 .7-.5 1.27-1.1 1.27zm0-4.35c-.64 0-1.16-.6-1.16-1.3 0-.7.52-1.3 1.16-1.3.64 0 1.17.5 1.17 1.2S16 20 15.4 20zm4.8 8.6c-.64 0-1.16-.6-1.16-1.3s.52-1.3 1.16-1.3c.64 0 1.17.5 1.17 1.2s-.5 1.3-1.1 1.3zm0-4.4c-.64 0-1.16-.6-1.16-1.3s.52-1.3 1.16-1.3c.64 0 1.17.54 1.17 1.24s-.5 1.26-1.1 1.26zm0-4.4c-.64 0-1.16-.6-1.16-1.3s.52-1.28 1.16-1.28c.64 0 1.17.56 1.17 1.26s-.5 1.3-1.1 1.3zm4.8 8.7c-.64 0-1.17-.6-1.17-1.3s.53-1.28 1.17-1.28c.65 0 1.17.6 1.17 1.3s-.5 1.3-1.1 1.3zm0-4.38c-.64 0-1.17-.57-1.17-1.27s.53-1.3 1.17-1.3c.65 0 1.17.6 1.17 1.3 0 .7-.5 1.25-1.1 1.25zm0-4.35c-.64 0-1.17-.55-1.17-1.25s.53-1.3 1.17-1.3c.65 0 1.17.6 1.17 1.3 0 .7-.5 1.24-1.1 1.24z" />
                    </svg>
                    :
                    <svg
                        className="PhoneList__icon--mobile"
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="37" viewBox="0 0 42 42">
                        <path
                            d="M20.8 6.87c6.92.07 11.26-.4 11.85 7.94h8.45C41.1 1.9 30.72.2 20.57.2S.04 1.9.04 14.8h8.4c.63-8.5 5.48-8 12.35-7.93zM4.23 18.97c2.06 0 3.77.13 4.16-2.07v-1.03H0c0 3.27 1.9 3.1 4.23 3.1zm28.47-3.1h-.08c0 .4.04.73.1 1.03.4 2.03 2.1 1.9 4.16 1.9 2.35 0 4.25.17 4.25-2.93H32.7z" />
                        <path
                            d="M28.57 13.64v-1.3c0-.58-.6-.6-1.38-.6h-1.3c-.8 0-1.4.02-1.4.6v2h-8.8v-2c0-.58-.6-.6-1.4-.6h-1.2c-.8 0-1.4.02-1.4.6v2.44c-2 2.26-8.6 11.9-8.8 13.06v7.77c0 .8.5 1.4 1.2 1.4h32c.6 0 1.2-.6 1.2-1.3v-7.9c-.3-1.1-6.8-10.7-8.8-13v-1.1zM15.34 28.88c-.64 0-1.16-.57-1.16-1.27 0-.7.52-1.2 1.16-1.2.64 0 1.17.6 1.17 1.3S16 29 15.4 29zm0-4.34c-.64 0-1.16-.57-1.16-1.27 0-.7.52-1.27 1.16-1.27.64 0 1.17.57 1.17 1.27 0 .7-.5 1.27-1.1 1.27zm0-4.35c-.64 0-1.16-.6-1.16-1.3 0-.7.52-1.3 1.16-1.3.64 0 1.17.5 1.17 1.2S16 20 15.4 20zm4.8 8.6c-.64 0-1.16-.6-1.16-1.3s.52-1.3 1.16-1.3c.64 0 1.17.5 1.17 1.2s-.5 1.3-1.1 1.3zm0-4.4c-.64 0-1.16-.6-1.16-1.3s.52-1.3 1.16-1.3c.64 0 1.17.54 1.17 1.24s-.5 1.26-1.1 1.26zm0-4.4c-.64 0-1.16-.6-1.16-1.3s.52-1.28 1.16-1.28c.64 0 1.17.56 1.17 1.26s-.5 1.3-1.1 1.3zm4.8 8.7c-.64 0-1.17-.6-1.17-1.3s.53-1.28 1.17-1.28c.65 0 1.17.6 1.17 1.3s-.5 1.3-1.1 1.3zm0-4.38c-.64 0-1.17-.57-1.17-1.27s.53-1.3 1.17-1.3c.65 0 1.17.6 1.17 1.3 0 .7-.5 1.25-1.1 1.25zm0-4.35c-.64 0-1.17-.55-1.17-1.25s.53-1.3 1.17-1.3c.65 0 1.17.6 1.17 1.3 0 .7-.5 1.24-1.1 1.24z" />
                    </svg>
                }

                </span>
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
