var path = require('path')
let {getArticles} = require(path.resolve('docs/.vuepress/routing_util'))

module.exports = {
    title: `yozi`,
    description: `작업 및 공부나 서칭 중 발견한걸 쓱싹쓱싹 합니다.`,
    base: "/",
    dest: 'build',
    head: [],
    themeConfig: {
        sidebar: [
            {
                title: 'about'
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
}