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
                path: `${__dirname}/src/files/markdown/articles/`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `doctors`,
                path: `${__dirname}/src/files/markdown/doctors/`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `prices`,
                path: `${__dirname}/src/files/markdown/prices/`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `actions-img`,
                path: `${__dirname}/src/files/img/actions/`
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
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
    ],
};
