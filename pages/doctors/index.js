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
            {articlesElements}
        </div>
    )
}

PriceList.propTypes = {
    route: PropTypes.object.isRequired
}
PriceList.defaultProps = {}

export default PriceList
