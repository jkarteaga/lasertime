import React from 'react'
import HelmetWrapper from '../components/HelmetWrapper'
import InfoPanel from '../components/InfoPanel'
import TextPanel from '../components/TextPanel'

function Services({ data }) {
    return (
        <div className="PageContent__wrapper">
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

            <p>
                Donec sed condimentum ante. Curabitur mi nisi, fringilla
                tristique sapien in, euismod tempor risus. Aliquam at dignissim
                ante. Quisque a fermentum augue, vitae mattis elit. Nam lorem
                felis, gravida ut tellus sit amet, ultrices suscipit nunc. Morbi
                odio risus, sagittis non tincidunt nec, molestie eu diam.
                Vivamus vitae ex elit.
            </p>
            <TextPanel title={'А знаете ли Вы?'}>
                <p>
                    Существуют некоторые противопоказания для контурной
                    пластики:
                </p>
                <ul>
                    <li>Воспалительные процессы, идущие в организме;</li>
                    <li>аутоиммунные болезни;</li>
                    <li>аллергия на отдельные составляющие геля;</li>
                    <li>беременность, период лактации;</li>
                    <li>Простудные заболевания;</li>
                    <li>
                        Сахарный диабет.Также процедуру контурной пластики
                        нельзя проводить детям, не достигшим совершеннолетия. В
                        любом случае, перед процедурой вы должны посоветоваться
                        с лечащим врачом на предмет заболеваний, не допустимых с
                        процедурой.
                    </li>
                </ul>

                <h2>А знаете ли Вы?</h2>
                <p>
                    Существуют некоторые противопоказания для контурной
                    пластики:
                </p>
                <ul>
                    <li>Воспалительные процессы, идущие в организме;</li>
                    <li>аутоиммунные болезни;</li>
                    <li>аллергия на отдельные составляющие геля;</li>
                    <li>беременность, период лактации;</li>
                    <li>Простудные заболевания;</li>
                    <li>
                        Сахарный диабет.Также процедуру контурной пластики
                        нельзя проводить детям, не достигшим совершеннолетия. В
                        любом случае, перед процедурой вы должны посоветоваться
                        с лечащим врачом на предмет заболеваний, не допустимых с
                        процедурой.
                    </li>
                </ul>
            </TextPanel>
            <p>
                Donec sed condimentum ante. Curabitur mi nisi, fringilla
                tristique sapien in, euismod tempor risus. Aliquam at dignissim
                ante. Quisque a fermentum augue, vitae mattis elit. Nam lorem
                felis, gravida ut tellus sit amet, ultrices suscipit nunc. Morbi
                odio risus, sagittis non tincidunt nec, molestie eu diam.
                Vivamus vitae ex elit.
            </p>
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
