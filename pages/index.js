import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import HomePage from '../components/HomePage'
import { config } from 'config'


class Index extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <HomePage />
            </div>
        )
    }
}


export default Index
