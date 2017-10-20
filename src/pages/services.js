import React from 'react'
import HelmetWrapper from '../components/HelmetWrapper'

function Services({ data }) {
    return (
        <div className="PageContent__wrapper">
            <HelmetWrapper data={data} title={'Услуги'} description="" />
            <h1>Услуги</h1>
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
