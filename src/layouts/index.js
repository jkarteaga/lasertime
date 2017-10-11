import React from 'react'
import PropTypes from 'prop-types'

import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PageFooter from '../components/PageFooter'
import MobileMenu from '../components/MobileMenu'

import 'normalize.css'
import '../css/styles.less'

function Page({ children, data }) {
    return (
        <div id="outer-container">
            <MobileMenu
                data={data}
                className="MobileMenu"
                right
                width={250}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
            />
            <div id="page-wrap" className="Page">
                <div className="Page__wrapper">
                    <PageHeader data={data} />
                    <PageContent>{children()}</PageContent>
                    <PageFooter />
                </div>
            </div>
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.func.isRequired,
}

export default Page

export const pageQuery = graphql`
    query indexLayout {
        ...MobileMenu
        ...PageHeader
        site {
            siteMetadata {
                title
            }
        }
    }
`
