const frontMatter = require('front-matter')
const markdownIt = require('markdown-it')
const objectAssign = require('object-assign')

const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
})
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-container'), 'box', {
        render: (tokens, idx) => {
            const m = tokens[idx].info.trim().match(/^box\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
                switch (m[1]) {
                case 'notice':
                    return '<div class="MessageBox MessageBox--notice">'
                case 'info':
                    return '<div class="MessageBox MessageBox--info">'
                case 'warning':
                    return '<div class="MessageBox MessageBox--warning">'
                case 'danger':
                    return '<div class="MessageBox MessageBox--danger">'
                }
            }
            return '</div>\n'
        }
    })

module.exports = function (content) {
    this.cacheable()
    const meta = frontMatter(content)
    const body = md.render(meta.body)
    const result = objectAssign({}, meta.attributes, {
        body,
    })
    this.value = result
    return `module.exports = ${JSON.stringify(result)}`
}
