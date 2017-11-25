import React from 'react'
import Helmet from '../components/HelmetWrapper'
import PagePreview from '../components/PagePreview'
import InfoBlock from '../components/InfoBlock'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function PriceList({ data }) {
    const pricelistElements = data.allMarkdownRemark.edges
        .sort((a, b) => {
            const aOrder = a.node.frontmatter.order
            const bOrder = b.node.frontmatter.order
            if (aOrder > bOrder) {
                return 1
            } else if (aOrder < bOrder) {
                return -1
            }
            return 0
        })
        .map(({ node }) => {
            return (
                <PagePreview
                    key={node.internal.contentDigest}
                    title={node.frontmatter.title}
                    path={node.frontmatter.path}
                />
            )
        })

    return (
        <div>
            <Helmet data={data} title="Цены" description="" keywords="" />

            <ArticleHeaderImage
                title={'Цены'}
                imgSizes={data.blank.sizes}
                alignLeft
                noEffects
            />
            <div className="PageContent__wrapper">
                <InfoBlock color="red">
                    <p>
                        Внимание, цены на сайте представлены только для
                        предварительного ознакомления! Цены на
                        высококачественные европейские препараты постоянно
                        корректируются. Уточняйте актуальную информацию по ценам
                        у нашего администратора.
                    </p>
                </InfoBlock>
                {pricelistElements}
            </div>
        </div>
    )
}

PriceList.propTypes = {}
PriceList.defaultProps = {}

export default PriceList

export const pageQuery = graphql`
    query Prices {
        ...Helmet
        blank: imageSharp(id: { regex: "/prices-header/" }) {
            sizes(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        allMarkdownRemark(filter: { fields: { group: { eq: "prices" } } }) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    frontmatter {
                        title
                        path
                        order
                    }
                }
            }
        }
    }
`
