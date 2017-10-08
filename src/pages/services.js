import React from 'react'
import Helmet from '../components/HelmetWrapper'
import HelmetWrapper from '../components/HelmetWrapper/index'

function Services({ data }) {
    return (
        <div className="PageContent__wrapper">
            <HelmetWrapper data={data} title={'Услуги'} description="" />
            <h1>Услуги</h1>
            Страница в разработке
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
