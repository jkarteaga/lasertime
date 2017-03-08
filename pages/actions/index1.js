import React, { PropTypes } from 'react'
import actions from './index.md'

function Actions(props) {
    // console.log('---', props.route)
    const actionsElement = props.route.pages[2].data.body
    console.log('---', actionsElement)
    // console.log('---', props.route.pages)
    return (
        <div>
            {actionsElement}
        </div>
    )
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions
