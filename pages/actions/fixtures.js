const actions = [
    {
        id: 1,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'голени + бикини + подмышки',
        image: 'laser-epilation-legs.jpg',
        price_old: 18000,
        price_new: 12000,
        group: 6
    },
    {
        id: 2,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'лицо + 1/3 шеи',
        image: 'laser-epilation-face.jpg',
        price_old: 6000,
        price_new: 3000,
        group: 6
    },
    {
        id: 3,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'руки полностью + подмышки',
        image: 'laser-epilation-armpits.jpg',
        price_old: 8000,
        price_new: 7000,
        group: 6
    },
    {
        id: 4,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'бикини + подмышки',
        image: 'laser-epilation-bikini.jpg',
        price_old: 7500,
        price_new: 6000,
        group: 6
    },
    {
        id: 5,
        category: 1,
        title: 'Увеличение губ',
        description: 'препаратом Princess Volume®',
        image: 'lips-augmentation.jpg',
        price_old: 23000,
        price_new: 10000,
        group: 6
    },
    {
        id: 6,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Aquashine® 2,5мл',
        image: 'biorevitalization.jpg',
        price_old: 19000,
        price_new: 12000,
        group: 6
    },
    {
        id: 7,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Hyaron® с обезболиванием',
        image: 'biorevitalization.jpg',
        price_old: 11000,
        price_new: 6000,
        group: 6
    },
    {
        id: 8,
        category: 1,
        title: 'Увеличение скул',
        description: 'препаратом Perfecta Subskin®',
        image: 'cheekbones-augmentation.jpg',
        price_old: 32000,
        price_new: 25000,
        group: 6
    },
    {
        id: 9,
        category: 1,
        title: 'Dysport®',
        description: 'цена за 1 единицу',
        image: 'dysport.jpg',
        price_old: 100,
        price_new: 85,
        group: 6
    },
    {
        id: 10,
        category: 1,
        title: 'Лечение гипергидроза',
        description: 'стоимость за 1 флакон',
        image: 'hyperhydrosis.jpg',
        price_old: 26000,
        price_new: 20000,
        group: 6
    },
    {
        id: 11,
        category: 1,
        title: 'Плазмолифинг',
        description: 'с гиалуроновой кислотой',
        image: 'plazmolifting.jpg',
        price_old: 7500,
        price_new: 6000,
        group: 6
    },
    {
        id: 12,
        category: 2,
        title: 'Фотоомоложение',
        description: 'лицо',
        image: 'ipl-rejuvenation.jpg',
        price_old: 10000,
        price_new: 7000,
        group: 6
    },
    {
        id: 13,
        category: 2,
        title: 'Чистка лица',
        description: 'комбинированная',
        image: 'facial-cleansing.jpg',
        price_old: 4000,
        price_new: 3000,
        group: 6
    },
    {
        id: 14,
        category: 2,
        title: 'Омоложение infini',
        description: 'RF-омоложение, насадка не вкл. в стоимость',
        image: 'infini.jpg',
        price_old: 11000,
        price_new: 10000,
        group: 6
    },
    {
        id: 15,
        category: 2,
        title: 'DOT-омоложение',
        description: 'фракционный нанопилинг с обезболиванием',
        image: 'dot-rejuvenation.jpg',
        price_old: 9000,
        price_new: 6000,
        group: 6
    },
]

const categories = ['Эпиляция', 'Инъекции', 'Аппаратная косметология', 'еще']

const groups = {
    1: [[1, 2, 3], [6, 7], [10, 11, 12], [15, 16], [19, 20, 21], [24, 25], [28, 29, 30]],
    2: [[2, 3], [7, 8], [12, 13], [17, 18], [22, 23], [27, 28], [31]],
    3: [[3, 4, 5, 6, 7, 8, 9], [17, 18, 19, 20, 21, 22, 23]],
    4: [[10, 11, 12, 13, 14, 15, 16], [24, 25, 26, 27, 28, 29, 30]],
    5: 'weekdays',
    6: 'weekend'
}

export default { actions, categories, groups }
