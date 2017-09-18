module.exports = {
    siteMetadata: {
        title: 'Клиника красоты Знак Качества',
        description: "",
        linkPrefix: "/lasertime",
        fixedPhone: "89055881313",
        mobilePhone: "79858888297",
        leftMenuItems: [
            ["/actions/", "Акции"],
            ["/doctors/", "Врачи"],
            ["/services/", "Услуги"],
        ],
        rightMenuItems: [
            ["/prices/", "Цены"],
            ["/articles/", "Статьи"],
            ["/contacts/", "Контакты"]
        ]
    },
    plugins: [
        'gatsby-plugin-less',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: `json`,
        //         path: `${__dirname}/src/files/`
        //     },
        // },
        // 'gatsby-transformer-json',
        // `gatsby-transformer-javascript-static-exports`,
    ],
}
