import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
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
                <h1>
                    Hello World!
                </h1>
                <p>
                    Some text
                </p>
                <Link to={prefixLink('/test/')}>Link</Link>
            </div>
        )
    }
}


export default Index
