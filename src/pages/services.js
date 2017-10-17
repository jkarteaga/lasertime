import React from 'react'
import HelmetWrapper from '../components/HelmetWrapper'
import InfoPanel from '../components/InfoPanel'
import TextPanel from '../components/TextPanel'

function Services({ data }) {
    return (
        <div className="PageContent__wrapper PageContent__wrapper--gray-bg">
            <HelmetWrapper data={data} title={'Услуги'} description="" />
            <h1>Услуги</h1>
            <InfoPanel
                title={
                    'Proin eget velit ante. Vivamus vel urna vitae orci vulputate\n' +
                    '                    accumsan sed sit amet ante.'
                }
            >
                <p>
                    Proin eget velit ante. Vivamus vel urna vitae orci vulputate
                    accumsan sed sit amet ante.
                </p>
            </InfoPanel>
            <InfoPanel title={'Hello'} color={'green'}>
                <p>
                    Proin eget velit ante. Vivamus vel urna vitae orci vulputate
                    accumsan sed sit amet ante.
                </p>
            </InfoPanel>
            <InfoPanel title={'Hello'} color={'red'}>
                <p>
                    Proin eget velit ante. Vivamus vel urna vitae orci vulputate
                    accumsan sed sit amet ante.
                </p>
            </InfoPanel>
            <InfoPanel title={'Hello'} color={'orange'}>
                <p>
                    Proin eget velit ante. Vivamus vel urna vitae orci vulputate
                    accumsan sed sit amet ante.
                </p>
            </InfoPanel>
            {/*<TextPanel title={'Hi there!'}>*/}
            {/*Proin eget velit ante. Vivamus vel urna vitae orci vulputate*/}
            {/*accumsan sed sit amet ante. Quisque et fermentum lorem, at*/}
            {/*elementum orci. Curabitur id nisi mauris. Sed eu rutrum mi.*/}
            {/*Pellentesque facilisis eget nibh laoreet porttitor. Ut vel*/}
            {/*elementum mauris. Morbi dignissim, nunc eu condimentum posuere,*/}
            {/*mauris metus sollicitudin enim, id eleifend mi nisl id dolor.*/}
            {/*Phasellus sed lorem non tortor scelerisque mattis. Morbi*/}
            {/*vehicula, odio eget sagittis tempus, velit mauris consequat*/}
            {/*dolor, sit amet lacinia ante sem sed erat. Fusce posuere iaculis*/}
            {/*imperdiet.*/}
            {/*</TextPanel>*/}
            Donec sed condimentum ante. Curabitur mi nisi, fringilla tristique
            sapien in, euismod tempor risus. Aliquam at dignissim ante. Quisque
            a fermentum augue, vitae mattis elit. Nam lorem felis, gravida ut
            tellus sit amet, ultrices suscipit nunc. Morbi odio risus, sagittis
            non tincidunt nec, molestie eu diam. Vivamus vitae ex elit.
        </div>
    )
}

Services.propTypes = {}
Services.defaultProps = {}

export default Services

export const pageQuery = graphql`
    query Services {
        ...Helmet
    }
`
