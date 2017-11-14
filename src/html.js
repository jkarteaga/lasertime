import React from 'react'
import { Helmet } from 'react-helmet'

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

const HTML = ({ body, headComponents, postBodyComponents }) => {
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
                    href="https://fonts.googleapis.com/css?family=Arsenal&amp;subset=cyrillic-ext"
                    rel="stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="msapplication-config"
                    content="/browserconfig.xml"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-16x16.png"
                    sizes="16x16"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-32x32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png">
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-touch-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon-180x180.png"
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

export default HTML
