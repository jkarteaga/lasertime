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

export function calcDiscount(priceOld, priceNew) {
    const discount = (1 - (priceNew / priceOld)) * 100
    return discount - (discount % 5)
}

export function filterActionsByCategory(array, catId) {
    return array.filter(item => item.category === catId)
}

// filterActionsByGroup returns array of action elements w/ added deadline field
export function filterCurrentActionsByGroup(items, groups) {
    // debugger
    const now = new Date().getDate()
    const actions = []


    items.forEach((item) => {
        const group = groups[item.group]
        let slice

        for (let i = 0; i < group.length; i++) {
            if (group[i].includes(now)) {
                slice = group[i]
                const deadline = slice[slice.length - 1] - (now - 1)
                actions.push({ ...item, deadline })
                break
            }
        }
    })

    return actions
}

export function generateDeadline(days) {
    switch (days) {
        case 1:
            return '1 день'
        case 2:
        case 3:
        case 4:
            return `${days} дня`
        default:
            return `${days} дней`
    }
}