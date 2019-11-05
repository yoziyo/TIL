var CONST = require("./const");

module.exports = {
    title: `yozi TIL (Today I Learned)`,
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
                children: CONST.GitList
            },
            {
                title: 'PHP',
                children: CONST.PhpList
            }
        ],
        nav: [{
            text: 'GitHub',
            link: 'https://github.com/yoziyo/'
        }]
    },
}