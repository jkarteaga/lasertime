module.exports = {
    pathPrefix: `/lasertime`,

    siteMetadata: {
        title: 'Клиника красоты "Знак Качества"',
        description:
            'Добро пожаловать в клинику красоты &quot;Знак Качества&quot;! Мы качественно проводим процедуры фракционного лазерного омоложения, лазерной эпиляции, пластической хирургии.',
        keywords:
            'клиника знак качества, легун алла, лазерная эпиляция в москве',
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-copy-linked-files`],
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-next`,
        // `gatsby-plugin-react-helmet`,
        // `gatsby-transformer-sharp`,
        // `gatsby-plugin-sharp`,
    ],
}
