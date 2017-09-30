import React from 'react'
import PropTypes from 'prop-types'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const mapState = { center: [55.767124, 37.632857], zoom: 17 }

class ContactsNavTab extends React.Component {
    render() {
        return (
            <YMaps>
                <Map
                    state={mapState}
                    width={this.props.parentNode.offsetWidth}
                    height={this.props.parentNode.offsetHeight}
                >
                    {/*<Placemark*/}
                    {/*geometry={{*/}
                    {/*coordinates: [55.751574, 37.573856],*/}
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
