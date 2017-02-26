import React, { PropTypes } from 'react'

function Index(props, context) {
    console.log('---', props.route)

    return (
        <div>1</div>
    )
}

Index.contextTypes = {
    router: PropTypes.object.isRequired
}
Index.propTypes = {
    route: PropTypes.object.isRequired
}
Index.defaultProps = {}

export default Index
