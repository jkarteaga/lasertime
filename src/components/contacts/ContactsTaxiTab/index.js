import React from 'react'
import ytaxiLogo from './svg/ytaxi.svg'
import uberLogo from './svg/uber.svg'
import gettLogo from './svg/gett.svg'
import appStore from './svg/appstore.svg'
import playStore from './svg/playstore.svg'

const ContactsTaxiTabCard = ({ logo, appStoreLink, playStoreLink }) => {
    return (
        <div className="ContactsTaxiTab__item">
            <img
                className="ContactsTaxiTab__logo ContactsTaxiTab__logo"
                src={logo}
            />
            <div className="ContactsTaxiTab__btn-block">
                <a href={appStoreLink} target="_blank">
                    <img
                        className="ContactsTaxiTab__btn ContactsTaxiTab__btn--appstore"
                        src={appStore}
                    />
                </a>
                <a href={playStoreLink} target="_blank">
                    <img
                        className="ContactsTaxiTab__btn ContactsTaxiTab__btn--playstore"
                        src={playStore}
                    />
                </a>
            </div>
        </div>
    )
}

function ContactsTaxiTab() {
    return (
        <div className="ContactsTaxiTab">
            <ContactsTaxiTabCard
                logo={ytaxiLogo}
                appStoreLink="https://itunes.apple.com/ru/app/яндекс-такси/id472650686"
                playStoreLink="https://play.google.com/store/apps/details?id=ru.yandex.taxi&hl=ru"
            />
            <ContactsTaxiTabCard
                logo={uberLogo}
                appStoreLink="https://itunes.apple.com/ru/app/uber/id368677368"
                playStoreLink="https://play.google.com/store/apps/details?id=com.ubercab&hl=ru"
            />
            <ContactsTaxiTabCard
                logo={gettLogo}
                appStoreLink="https://itunes.apple.com/ru/app/gett-заказ-такси/id449655162"
                playStoreLink="https://play.google.com/store/apps/details?id=com.gettaxi.android&hl=ru"
            />
        </div>
    )
}

ContactsTaxiTab.propTypes = {}
ContactsTaxiTab.defaultProps = {}

export default ContactsTaxiTab
