import React from 'react'
import PropTypes from 'prop-types'
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
    ZoomControl,
    GeoObject,
    TrafficControl,
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
                    <GeoObject
                        // The geometry description.
                        geometry={{
                            type: 'Point',
                            coordinates: [55.767124, 37.632857],
                        }}
                        // Properties.
                        properties={{
                            // The placemark content.
                            iconContent: 'Клиника "Знак Качества"',
                            hintContent: '',
                        }}
                        // Options.
                        options={{
                            // The placemark's icon will stretch to fit its contents.
                            preset: 'islands#orangeStretchyIcon',
                            // The placemark can be moved.
                            draggable: true,
                        }}
                    />
                    {/*<Placemark*/}
                    {/*geometry={{*/}
                    {/*coordinates: [55.767124, 37.632857],*/}
                    {/*}}*/}
                    {/*properties={{*/}
                    {/*hintContent: 'Собственный значок метки',*/}
                    {/*balloonContent: 'Это красивая метка',*/}
                    {/*}}*/}
                    {/*options={{*/}
                    {/*iconLayout: 'default#image',*/}
                    {/*iconImageHref: 'images/myIcon.gif',*/}
                    {/*iconImageSize: [30, 42],*/}
                    {/*iconImageOffset: [-3, -42],*/}
                    {/*}}*/}
                    {/*/>*/}
                </Map>
            </YMaps>
        )
    }
}

ContactsNavTab.propTypes = {
    parentNode: PropTypes.node.isRequired,
}
ContactsNavTab.defaultProps = {}

export default ContactsNavTab
