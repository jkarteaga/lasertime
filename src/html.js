import React from 'react'
import { Helmet } from 'react-helmet'

// import { siteMetadata as config } from '../gatsby-config'

const isProduction = process.env.NODE_ENV === 'production'
//TODO add opengraph
// https://github.com/oliverbenns/oliverbenns.com/blob/master/src/html.jsx

let styles
if (isProduction) {
    try {
        styles = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

const Html = ({ body, headComponents, postBodyComponents }) => {
    const helmet = Helmet.renderStatic()

    return (
        <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Arsenal"
                    rel="stylesheet"
                />

                {headComponents}

                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}

                {styles && (
                    <style
                        id="gatsby-inlined-css"
                        dangerouslySetInnerHTML={{ __html: styles }}
                    />
                )}
            </head>

            <body>
                <div
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
                {postBodyComponents}
            </body>
        </html>
    )
}

export default Html
