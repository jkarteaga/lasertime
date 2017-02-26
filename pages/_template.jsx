import React, { PropTypes } from 'react'
import '../css/styles.less'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

function Template({ children }) {
    return (
        <div>
            <PageHeader />
            <PageContent>
                {children}
            </PageContent>


        </div>
    )
}

Template.propTypes = {
    children: PropTypes.object.isRequired  // eslint-disable-line react/forbid-prop-types
}

export default Template
