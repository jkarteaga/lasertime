import React from 'react'
import Helmet from '../components/HelmetWrapper'
import ServiceList from '../components/ServiceList'
import ServiceListItem from '../components/ServiceListItem'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function Services({ data }) {
    return (
        <div>
            <Helmet data={data} title={'Услуги'} description="" />

            <div className="PageContent__header">
                <ArticleHeaderImage
                    title={'Услуги'}
                    imgSizes={data.servicesHeader.sizes}
                />
            </div>

            <div className="PageContent__wrapper">
                <ServiceList>
                    <ServiceListItem
                        title="Лазерная эпиляция"
                        link="/services/laser-epilation"
                        imgSizes={data.laserEpilationHeader.sizes}
                    />
                </ServiceList>
            </div>
        </div>
    )
}

Services.propTypes = {}
Services.defaultProps = {}

export default Services

export const pageQuery = graphql`
    query Services {
        ...Helmet
        servicesHeader: imageSharp(id: { regex: "/face/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserEpilationHeader: imageSharp(
            id: { regex: "/laser-epilation-header/" }
        ) {
            sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
