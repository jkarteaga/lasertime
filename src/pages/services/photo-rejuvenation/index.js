import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import InfoPanel from '../../../components/InfoPanel/index'
import List from '../../../components/List/index'
import InfoBlock from '../../../components/InfoBlock/index'
import CollapsiblePanel from '../../../components/CollapsiblePanel/index'
import PullQuote from '../../../components/PullQuote/index'
import TOC from '../../../components/TOC'
import Img from 'gatsby-image'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import FloatBlock from '../../../components/FloatBlock/index'
import ServiceStats from '../../../components/ServiceStats'
import ArticleHeaderImage from '../../../components/ArticleHeaderImage'

function PhotoRejuvenationService({ data }) {
    configureAnchors({ offset: -70, scrollDuration: 500 })

    return (
        <div>
            <Helmet data={data} title="Фотоомоложение" description="" />
            <ArticleHeaderImage title="Фотоомоложение" imgSizes={data.photoRejuvenationHeader.sizes} />
        </div>
    )
}

export default PhotoRejuvenationService

export const pageQuery = graphql`
    query PhotoRejuvenationServiceQuery {
        ...Helmet
        photoRejuvenationHeader: imageSharp(id: { regex: "/laser-epilation-header/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
