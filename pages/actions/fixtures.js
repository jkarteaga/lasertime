const actions = [
    {
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'голени + бикини + подмышки',
        image: 'laser-epilation-legs.jpg',
        price_old: 18000,
        price_new: 12000,
        group: 2,
        delay: 0
    },
    {
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'лицо + 1/3 шеи',
        image: 'laser-epilation-face.jpg',
        price_old: 6000,
        price_new: 3000,
        group: 2,
        delay: 0
    },
    {
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'руки полностью + подмышки',
        image: 'laser-epilation-armpits.jpg',
        price_old: 8000,
        price_new: 7000,
        group: 2,
        delay: 0
    },
    {
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'бикини + подмышки',
        image: 'laser-epilation-bikini.jpg',
        price_old: 7500,
        price_new: 6000,
        group: 2,
        delay: 0
    },
    {
        category: 1,
        title: 'Увеличение губ',
        description: 'препаратом Princess Volume®',
        image: 'lips-augmentation.jpg',
        price_old: 23000,
        price_new: 10000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Aquashine® 2,5мл',
        image: 'biorevitalization.jpg',
        price_old: 19000,
        price_new: 12000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Hyaron® с обезболиванием',
        image: 'biorevitalization.jpg',
        price_old: 11000,
        price_new: 6000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Увеличение скул',
        description: 'препаратом Perfecta Subskin®',
        image: 'cheekbones-augmentation.jpg',
        price_old: 32000,
        price_new: 25000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Dysport®',
        description: 'цена за 1 единицу',
        image: 'dysport.jpg',
        price_old: 100,
        price_new: 85,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Лечение гипергидроза',
        description: 'стоимость за 1 флакон',
        image: 'hyperhydrosis.jpg',
        price_old: 26000,
        price_new: 20000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Плазмолифинг',
        description: 'с гиалуроновой кислотой',
        image: 'plazmolifting.jpg',
        price_old: 7500,
        price_new: 6000,
        group: 1,
        delay: 0
    },
    {
        category: 2,
        title: 'Фотоомоложение',
        description: 'лицо',
        image: 'ipl-rejuvenation.jpg',
        price_old: 10000,
        price_new: 7000,
        group: 1,
        delay: 0
    },
    {
        category: 2,
        title: 'Чистка лица',
        description: 'комбинированная',
        image: 'facial-cleansing.jpg',
        price_old: 4000,
        price_new: 3000,
        group: 1,
        delay: 0
    },
    {
        category: 2,
        title: 'Омоложение infini',
        description: 'RF-омоложение, насадка не вкл. в стоимость',
        image: 'infini.jpg',
        price_old: 11000,
        price_new: 10000,
        group: 1,
        delay: 0
    },
    {
        category: 2,
        title: 'DOT-омоложение',
        description: 'фракционный нанопилинг с обезболиванием',
        image: 'dot-rejuvenation.jpg',
        price_old: 9000,
        price_new: 6000,
        group: 1,
        delay: 0
    },
]

const categories = ['Эпиляция', 'Инъекции', 'Аппаратная косметология', 'еще']

const groups = {
    1: [[1, 5], [10, 12]],
    2: [[14, 16]]
}

export default { actions, categories, groups }
