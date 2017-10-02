module.exports = {
    pathPrefix: `/lasertime`,

    siteMetadata: {
        title: 'Клиника красоты Знак Качества',
        description: '',
        linkPrefix: '/lasertime',
        fixedPhone: '89055881313',
        mobilePhone: '79858888297',
        menuItems: {
            leftMenuItems: [
                { path: '/actions/', name: 'Акции' },
                { path: '/doctors/', name: 'Врачи' },
                { path: '/services/', name: 'Услуги' },
            ],
            rightMenuItems: [
                { path: '/prices/', name: 'Цены' },
                { path: '/articles/', name: 'Статьи' },
                { path: '/contacts/', name: 'Контакты' },
            ],
        },
    },

    plugins: [
        'gatsby-plugin-less',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/files/markdown/articles/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `doctors`,
                path: `${__dirname}/src/files/markdown/doctors/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `prices`,
                path: `${__dirname}/src/files/markdown/prices/`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `actions-img`,
        //         path: `${__dirname}/src/files/img/actions/`,
        //     },
        // },
        // `gatsby-transformer-sharp`,
        // `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            // options: {
            //     plugins: [
            //         {
            //             resolve: `gatsby-remark-images`,
            //             // options: {
            //             //     // It's important to specify the maxWidth (in pixels) of
            //             //     // the content container as this plugin uses this as the
            //             //     // base for generating different widths of each image.
            //             //     maxWidth: 900,
            //             //     // Remove the default behavior of adding a link to each
            //             //     // image.
            //             //     linkImagesToOriginal: false,
            //             // },
            //         },
            //     ],
            // },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
    ],
}
