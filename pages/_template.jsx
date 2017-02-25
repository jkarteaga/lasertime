import React, { PropTypes } from 'react'
import '../css/styles.less'
import PageHeader from '../components/PageHeader'

function Template({ children }) {
    return (
        <div>
            <PageHeader />
            {children}
        </div>
    )
}

Template.propTypes = {
    children: PropTypes.object.isRequired  // eslint-disable-line react/forbid-prop-types
}

export default Template
