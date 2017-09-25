import React from 'react'
import PropTypes from 'prop-types'

import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PageFooter from '../components/PageFooter'
import MobileMenu from '../components/MobileMenu'

import 'normalize.css'
import '../css/styles.less'

function Page({ children, data }) {
    console.log('--- `data` in layouts/index.js: ', data)
    return (
        <div id="outer-container">
            <MobileMenu
                data={data.site.siteMetadata}
                className="MobileMenu" right width={250}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'} />
            <div id="page-wrap" className="Page">
                <div className="Page__wrapper">
                    <PageHeader data={data.site.siteMetadata}/>
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
    children: PropTypes.func.isRequired
}

export default Page

export const pageQuery = graphql`
query indexLayout {
    site {
      siteMetadata {
        title
        ...PageHeader
        ...MobileMenu
      }
    }
  }
`