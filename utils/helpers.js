
export function getNews(pages) {
    return pages.filter((page) => {
        return page.requirePath.indexOf('news/') !== -1 && page.file.ext === 'md'
    });
}

export function getPrices(pages) {
    return pages.filter((page) => {
        return page.requirePath.indexOf('prices/') !== -1 && page.file.ext === 'md'
    });
}

export function getArticles(pages) {
    return pages.filter((page) => {
        return page.requirePath.indexOf('articles/') !== -1 && page.file.ext === 'md'
    });
}
