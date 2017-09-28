import React from 'react'
import PagePreview from '../components/PagePreview'

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
        <div className="PageContent__wrapper">
            <h1>Цены</h1>
            <p className="">
                Внимание, цены на сайте представлены только для предварительного
                ознакомления! В связи в нестабильным экономическим положением в
                стране, цены на высококачественные европейские препараты
                постоянно корректируются. Уточняйте актуальную информацию по
                ценам у нашего администратора.
            </p>
            {pricelistElements}
        </div>
    )
}

PriceList.propTypes = {}
PriceList.defaultProps = {}

export default PriceList

export const pageQuery = graphql`
    query Prices {
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
