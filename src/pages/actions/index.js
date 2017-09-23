import React from 'react'
import ActionList from '../../components/ActionList'
import fixtures from './fixtures'

function Actions() {
    const { actions, categories, groups } = fixtures

    return (
        <div>
            <h1>Акции нашей клиники</h1>
            <ActionList items={actions} categories={categories} groups={groups} />
        </div>
    )
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions
