export function getNews(pages) {
    return pages.filter((page) => {
        return page.requirePath.indexOf('news/') !== -1 && page.file.ext === 'md' && !page.data.draft
    });
}

export function getDoctors(pages) {
    return pages.filter((page) => {
        return page.requirePath.indexOf('doctors/') !== -1 && page.file.ext === 'md'
    });
}

export function getPrices(pages) {
    return pages
        .filter(page => page.requirePath.indexOf('prices/') !== -1 && page.file.ext === 'md' && !page.data.draft)
        .sort((p1, p2) => p1.data.order - p2.data.order)
}

export function getArticles(pages) {
    return pages.filter(page => page.requirePath.indexOf('articles/') !== -1 && page.file.ext === 'md' && !page.data.draft)
}
