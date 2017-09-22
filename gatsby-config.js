module.exports = {

    siteMetadata: {
        title: 'Клиника красоты Знак Качества',
        description: '',
        linkPrefix: '/lasertime',
        fixedPhone: '89055881313',
        mobilePhone: '79858888297',
        menuItems: {
            leftMenuItems: [
                {path: '/actions/', name: 'Акции'},
                {path: '/doctors/', name: 'Врачи'},
                {path: '/services/', name: 'Услуги'},
            ],
            rightMenuItems: [
                {path: '/prices/', name: 'Цены'},
                {path: '/articles/', name: 'Статьи'},
                {path: '/contacts/', name: 'Контакты'},
            ],
        }
    },

    plugins: [
        'gatsby-plugin-less',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/articles/`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // {
                    //     resolve: `gatsby-remark-images`,
                    //     options: {
                    //         maxWidth: 690
                    //     },
                    // },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        // `gatsby-plugin-sharp`,
        // `gatsby-plugin-react-helmet`

        // 'gatsby-transformer-json',
        // `gatsby-transformer-javascript-static-exports`,
    ],
};
