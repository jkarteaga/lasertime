module.exports = {
    siteMetadata: {
        title: 'Клиника красоты Знак Качества',
        description: '',
        linkPrefix: '/lasertime',
        fixedPhone: '89055881313',
        mobilePhone: '79858888297',
        // leftMenuItems: [
        //     ['/actions/', 'Акции'],
        //     ['/doctors/', 'Врачи'],
        //     ['/services/', 'Услуги'],
        // ],
        // rightMenuItems: [
        //     ['/prices/', 'Цены'],
        //     ['/articles/', 'Статьи'],
        //     ['/contacts/', 'Контакты']
        // ]
    },
    plugins: [
        'gatsby-plugin-less',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/pages/articles`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 690
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-plugin-sharp`

        // 'gatsby-transformer-json',
        // `gatsby-transformer-javascript-static-exports`,
    ],
}
