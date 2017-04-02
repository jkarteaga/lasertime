const actions = [
    {
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Hyaron',
        image: 'face-cleansing.jpg',
        price_old: 13000,
        price_new: 10000,
        group: 1,
        delay: 0
    },
    {
        category: 2,
        title: 'Лазерная эпиляция',
        description: 'голени + бикини + подмышки',
        image: 'laser-epilation-bikini.jpg',
        price_old: 16000,
        price_new: 12000,
        group: 2,
        delay: 0
    },
    {
        category: 2,
        title: 'Лазерная эпиляция',
        description: 'лицо + 1/3 шеи',
        image: 'laser-epilation-face.jpg',
        price_old: 5000,
        price_new: 3000,
        group: 2,
        delay: 0
    },
    {
        category: 2,
        title: 'Лазерная эпиляция',
        description: 'руки полностью + подмышки',
        image: 'laser-epilation-hands.jpg',
        price_old: 10000,
        price_new: 6000,
        group: 2,
        delay: 0
    },
]

const categories = {
    1: 'Аппаратная косметология',
    2: 'Лазерная эпиляция'
}

const groups = {
    1: [[1, 5], [10, 12]],
    2: [[14, 16]]
}

export default { actions, categories, groups }
