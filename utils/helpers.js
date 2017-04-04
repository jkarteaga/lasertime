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
    const date = new Date().getDate()
    const day = new Date().getDay()
    const actions = []


    items.forEach((item) => {
        const group = groups[item.group]
        let slice

        if (typeof group !== 'string') {
            for (let i = 0; i < group.length; i++) {
                if (group[i].includes(date)) {
                    slice = group[i]
                    const deadline = slice[slice.length - 1] - (date - 1)
                    actions.push({ ...item, deadline })
                    break
                }
            }
        } else if (group === 'weekdays' && day !== 0 && day !== 6) {
            const deadline = 6 - day
            actions.push({ ...item, deadline })
        } else if (group === 'weekend' && (day === 0 || day === 6)) {
            actions.push({ ...item, deadline: day === 0 ? 1 : 2 })
        }
    })

    return actions
}

export function generateDeadlineString(days) {
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