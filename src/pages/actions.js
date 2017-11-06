import React from 'react'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import fixtures from '../files/config/actions-fixtures'

function Actions({ data }) {
    const { actions, categories, groups } = fixtures

    return (
        <div className="">
            <Helmet data={data} title="Акции" description="" />
            <h1>Акции нашей клиники</h1>
            <ActionList
                items={actions}
                categories={categories}
                groups={groups}
            />
        </div>
    )
}

export default Actions

export const pageQuery = graphql`
    query Actions {
        ...Helmet
    }
`
