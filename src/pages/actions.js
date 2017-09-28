import React from 'react'
import ActionList from '../components/ActionList'
import fixtures from '../files/config/fixtures'

function Actions() {
    const { actions, categories, groups } = fixtures

    return (
        <div className="">
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
