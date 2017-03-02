import React, { PropTypes } from 'react'
import { getDoctors } from '../../utils/helpers'
import PagePreview from '../../components/PagePreview'

function PriceList(props) {

    const priceLists = getDoctors(props.route.pages)
    const articlesElements = priceLists.map((article, id) => {
        return <PagePreview key={id} article={article} />
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

PriceList.propTypes = {
    route: PropTypes.object.isRequired
}
PriceList.defaultProps = {}

export default PriceList
