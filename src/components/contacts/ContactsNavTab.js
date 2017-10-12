import React from 'react'
import PropTypes from 'prop-types'
import {
    YMaps,
    Map,
    FullscreenControl,
    ZoomControl,
    GeoObject,
    TrafficControl,
    GeolocationControl,
} from 'react-yandex-maps'

const mapState = {
    center: [55.767124, 37.632857],
    zoom: 17,
    controls: [],
}

class ContactsNavTab extends React.Component {
    render() {
        return (
            <YMaps>
                <Map
                    state={mapState}
                    width={this.props.parentNode.offsetWidth}
                    height={this.props.parentNode.offsetHeight - 40}
                >
                    <FullscreenControl />
                    <ZoomControl />
                    <TrafficControl />
                    <GeolocationControl />
                    <GeoObject
                        geometry={{
                            type: 'Point',
                            coordinates: [55.767124, 37.632857],
                        }}
                        properties={{
                            iconContent: 'Клиника "Знак Качества"',
                            hintContent: 'Москва, Рыбников переулок, дом 4',
                        }}
                        options={{
                            preset: 'islands#orangeStretchyIcon',
                            draggable: false,
                        }}
                    />
                </Map>
            </YMaps>
        )
    }
}

ContactsNavTab.propTypes = {
    parentNode: PropTypes.object.isRequired,
}
ContactsNavTab.defaultProps = {}

export default ContactsNavTab
