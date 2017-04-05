import React, { PropTypes } from 'react'
import ActionList from '../../components/ActionList'
import fixtures from './fixtures'

function Actions(props) {
    const { actions, categories, groups } = fixtures

    return (
        <ActionList items={actions} categories={categories} groups={groups} />
    )
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions
