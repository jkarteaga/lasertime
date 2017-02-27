import React, { PropTypes } from 'react'
import { getPrices } from '../../utils/helpers'
import PagePreview from '../../components/PagePreview'

function PriceList(props, context) {

    const articles = getPrices(props.route.pages)
    const articlesElements = articles.map((article) => {
        return <PagePreview article={article} />
    })

    return (
        <div>
            <p>Внимание, цены на сайте представлены только для предварительного ознакомления!
                В связи в нестабильным экономическим положением в стране, цены на высококачественные европейские
                препараты постоянно корректируются. Уточняйте актуальную информацию по ценам у нашего
                администратора.
            </p>
            {articlesElements}
        </div>
    )
}

PriceList.contextTypes = {
    router: PropTypes.object.isRequired
}
PriceList.propTypes = {
    route: PropTypes.object.isRequired
}
PriceList.defaultProps = {}

export default PriceList
