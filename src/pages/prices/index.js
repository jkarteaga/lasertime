import React  from 'react'
import PagePreview from '../../components/PagePreview'

function PriceList({ data }) {

    // const priceLists = getPrices(props.route.pages)
    const pricelistElements = data.allMarkdownRemark.edges.map(({ node }) => {
        return <PagePreview key={node.internal.contentDigest} title={node.frontmatter.title} path={node.frontmatter.path} />
    })

    return (
        <div className="PageContent__wrapper">

            <p className="">Внимание, цены на сайте представлены только для предварительного ознакомления!
                В связи в нестабильным экономическим положением в стране, цены на высококачественные европейские
                препараты постоянно корректируются. Уточняйте актуальную информацию по ценам у нашего
                администратора.
            </p>
            {pricelistElements}
        </div>
    )
}


PriceList.propTypes = {}
PriceList.defaultProps = {}

export default PriceList


export const pageQuery = graphql`
query PricesByOrder {
  allMarkdownRemark(
    filter: {fields: {group: {eq: "prices"}}}
  ) {
    edges {
      node {
        internal {
          contentDigest
        }
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`
