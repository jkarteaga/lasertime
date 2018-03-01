import React from 'react'

function ContactsInfoPanel() {
    return (
        <div className="ContactsInfoPanel">
            <div className="ContactsInfoPanel__item">
                <svg
                    className="ContactsInfoPanel__icon ContactsInfoPanel__icon--phone"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                >
                    <circle cx="66" cy="88" r="13" />
                    <path d="M39.65 44.5s3.1-15.73 26.66-15.73c23.6 0 26.08 15.43 26.08 16.03v4.15S94.2 54 97.92 54h16.43s4.65-1.48 4.65-5.34-.3-9.8-.3-9.8S109.7 16 66.92 16 13 36.48 13 38.86v9.5S13.93 54 17.34 54h16.74s4.96-1.2 5.27-4.16c.3-2.97.3-5.34.3-5.34z" />
                    <path d="M20 92.46s4.9-20.6 19.3-36c2.15-1.84 1.6-.46 2.15-1.23h4.9v-9.85S48.2 42 53.1 42s6.43 4 6.43 4v8.92H72.4v-9.54S73.6 42 78.82 42c5.2 0 6.43 3.7 6.43 3.7v9.53h4.9c1.84.3 2.76 1.54 2.76 1.54 17.8 22.77 18.1 36 18.1 36v16.3c0 4.3-4.9 4.93-4.9 4.93H25.5c-5.2 0-5.52-6.15-5.52-6.15v-15.4zm45.65 14.77c10.66 0 19.3-8.75 19.3-19.54 0-10.8-8.64-19.58-19.3-19.58s-19.3 8.75-19.3 19.54c0 10.78 8.64 19.53 19.3 19.53z" />
                </svg>
                <div className="ContactsInfoPanel__phone">
                    8 (905) 588 13 13
                </div>
            </div>
            <div className="ContactsInfoPanel__item">
                <svg
                    className="ContactsInfoPanel__icon ContactsInfoPanel__icon--address"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                >
                    <path d="M18 75.2l43.17-36.97S61.9 37 63.67 37c1.8 0 2.5 1.23 2.5 1.23L109 75.5v35.72s.34 2.77-2.5 2.77h-25s-2.84 0-2.84-2.2V85s-.72-2.14-2.5-2.14H50.83s-2.5.3-2.5 2.47v26.17s.36 2.48-2.5 2.48H20.85s-2.85.3-2.85-2.17V75.2z" />
                    <path d="M6.47 62.2l54.97-47.5s1.42-1.56 3.2 0c28.08 23.07 54.6 47.5 54.6 47.5s1.43 1.53.36 2.77c-1.06 1.23-6.02 5.24-6.02 5.24s-1.78 1.6-3.55.36c-1.77-1.23-22.36-20.2-45.75-39.48-.7-.93-2.13 0-2.13 0L16.05 70.2s-1.78 1.25-3.55 0c-1.78-1.2-3.55-2.75-6.03-4.9-1.05-1.4 0-3.1 0-3.1z" />
                </svg>
                <div className="ContactsInfoPanel__address">
                    г. Москва, Рыбников переулок 4
                </div>
            </div>
            <div className="ContactsInfoPanel__item">
                <svg
                    className="ContactsInfoPanel__icon ContactsInfoPanel__icon--email"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                >
                    <path d="M11.78 33.03s.28-1.1 2.23-1.67c48.55-.8 97.88 0 99.27 0 1.4 0 2.5 1.4 2.5 1.4L63.5 75.77 11.78 33.03zM9 40.58L64.33 85 118 40.58v58.4c0 4.74-4.73 5.02-4.73 5.02H14c-3.6 0-5-5.03-5-5.03v-58.4z" />
                </svg>
                <div className="ContactsInfoPanel__email">
                    info@lasertime.ru
                </div>
            </div>
        </div>
    )
}

ContactsInfoPanel.propTypes = {}
ContactsInfoPanel.defaultProps = {}

export default ContactsInfoPanel
