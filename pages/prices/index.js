import React, { PropTypes } from 'react'
import { getPrices } from '../../utils/helpers'
import PagePreview from '../../components/PagePreview'

function PriceList(props, context) {

    const priceLists = getPrices(props.route.pages)
    const articlesElements = priceLists.map((article, id) => {
        return <PagePreview key={id} article={article} />
    })

    return (
        <div>
            <p className="MessageBox MessageBox--notice">Внимание, цены на сайте представлены только для предварительного ознакомления!
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
