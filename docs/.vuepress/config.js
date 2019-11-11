var path = require('path')
let {getArticles} = require(path.resolve('docs/.vuepress/routing_util'))

module.exports = {
    title: `yozi`,
    description: `작업 및 공부나 서칭 중 발견한걸 쓱싹쓱싹 합니다.`,
    base: "/",
    dest: 'build',
    head: [
        ['meta', {name: 'google-site-verification', content: '3gPmM4KkGCt0Pa0Nh6imdLzt8bS4EcqyyfYq8GjEaxo'}],
        ['link', {rel: 'icon', href: `logo-144.png`}],
        ['meta', {name: 'theme-color', content: '#5b19de'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `logo-144.png`}],
        ['link', {rel: 'mask-icon', href: 'logo-144.png', color: '#5b19de'}],
        ['meta', {name: 'msapplication-TileImage', content: 'logo-144.png'}]
    ],
    themeConfig: {
        sidebar: [
            {
                title: 'About'
            },
            {
                title: 'Codewars',
                collapsable: true,
                children: getArticles('codewars')
            },
            {
                title: 'GIT',
                collapsable: true,
                children: getArticles('git')
            },
            {
                title: 'PHP',
                collapsable: true,
                children: getArticles('php')
            },
            {
                title: 'Database',
                collapsable: true,
                children: getArticles('database')
            },
        ],
        nav: [{
            text: 'GitHub',
            link: 'https://github.com/yoziyo/'
        }]
    },
    plugins: [
        ['@vuepress/google-analytics', {
            'ga': 'UA-151651051-1'
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@limdongjin/vuepress-plugin-simple-seo', {
            default_image: '/logo.png',
            root_url: 'https://blog.yozi.kr',
            default_site_name: 'YOZI TIL'
        }]
    ],
}
