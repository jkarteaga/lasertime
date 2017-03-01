import React, { PropTypes } from 'react'
import '../css/styles.less'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PageFooter from '../components/PageFooter'

function Page({ children }) {
    return (
        <div className="Page">
            <PageHeader />
            <PageContent>
                {children}
            </PageContent>
            <PageFooter />
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.object.isRequired  // eslint-disable-line react/forbid-prop-types
}

export default Page
