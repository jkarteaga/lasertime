import 'normalize.css'
import '../css/styles.less'
import React from 'react'
import PropTypes from 'prop-types'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PageFooter from '../components/PageFooter'
import MobileMenu from '../components/MobileMenu'

function Page({ children }) {

    return (
        <div id="outer-container">
            <MobileMenu className="MobileMenu" right width={250} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap" className="Page">
                <div className="Page__wrapper">
                    <PageHeader />
                    <PageContent>
                        {children()}
                    </PageContent>
                    <PageFooter />
                </div>
            </div>
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.object.isRequired  // eslint-disable-line react/forbid-prop-types
}

export default Page
