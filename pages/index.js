import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'


class Index extends React.Component {
    render() {
        console.log('---', this.props.route)

        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <h1>
                    Home Page
                </h1>
            </div>
        )
    }
}


export default Index
