import React from 'react'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import fixtures from '../files/config/actions-fixtures'
import HelmetWrapper from '../components/HelmetWrapper/index'

function Actions({ data }) {
    const { actions, categories, groups } = fixtures

    return (
        <div className="">
            <HelmetWrapper data={data} title="Акции" description="" />
            <h1>Акции нашей клиники</h1>
            <ActionList
                items={actions}
                categories={categories}
                groups={groups}
            />
        </div>
    )
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions

export const pageQuery = graphql`
    query Actions {
        ...Helmet
    }
`
