const shopCategories = [
    {
        bank: 'Homecredit',
        shop: 'Аэрофлот',
        category: 'Авиа и ж/д билеты',
        mcc: '3011',
    },
    {
        bank: 'Tinkoff',
        shop: 'Столички',
        category: 'Аптеки',
        mcc: '5912',
    },
    {
        bank: 'Homecredit',
        shop: 'Столички',
        category: 'Аптеки',
        mcc: '5912',
    },
    {
        bank: 'Homecredit',
        shop: 'Леруа Мерлен',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homecredit',
        shop: 'Оби',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homecredit',
        shop: 'Все инструменты',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homecredit',
        shop: 'Бассейн',
        category: 'Досуг и развлечения',
        mcc: '7997',
    },
    {
        bank: 'Homecredit',
        shop: 'Суши Wok',
        category: 'Кафе и рестораны',
        mcc: '5811',
    },
    {
        bank: 'Tinkoff',
        shop: 'Киномакс',
        category: 'Кино',
        mcc: '7832',
    },
    {
        bank: 'Homecredit',
        shop: 'Музей востока',
        category: 'Налоги и сборы',
        mcc: '9399',
    },
    {
        bank: 'Homecredit',
        shop: 'Мои документы',
        category: 'Налоги и сборы',
        mcc: '9399',
    },
    {
        bank: 'Homecredit',
        shop: 'ЦППК',
        category: 'Общественный транспорт',
        mcc: '4111',
        description: 'Электричка',
    },
    {
        bank: 'Homecredit',
        shop: 'Метро',
        category: 'Общественный транспорт',
        mcc: '4111',
        description: 'Тройка',
    },
    {
        bank: 'Homecredit',
        shop: 'Аэроэкспресс',
        category: 'Общественный транспорт',
        mcc: '4111',
    },
    {
        bank: 'Homecredit',
        shop: 'Стрелка',
        category: 'Общественный транспорт',
        mcc: '4131',
    },
    {
        bank: 'Homecredit',
        shop: 'Фамилия',
        category: 'Одежда и обувь',
        mcc: '5651',
    },
    {
        bank: 'Homecredit',
        shop: 'Сплав',
        category: 'Одежда и обувь',
        mcc: '5611',
        date: '24.12.2022',
    },
    {
        bank: 'Homecredit',
        shop: 'Онлайн трейд',
        category: 'Одежда и обувь',
        mcc: '5311',
        description: 'Неожиданно',
    },
    {
        bank: 'Homecredit',
        shop: 'Спортмастер',
        category: 'Одежда и обувь',
        mcc: '5651',
    },
    {
        bank: 'Sber',
        shop: 'Сбермаркет',
        category: 'Оплата товаров и услуг',
        mcc: '5411',
    },
    {
        bank: 'Sber',
        shop: 'Метро',
        category: 'Оплата товаров и услуг',
        mcc: '4111',
        description: 'Тройка',
    },
    {
        bank: 'Sber',
        shop: 'ЦППК',
        category: 'Оплата товаров и услуг',
        mcc: '4111',
        description: 'Электричка',
    },
    {
        bank: 'Sber',
        shop: 'Все инструменты',
        category: 'Оплата товаров и услуг',
        mcc: '5200',
    },
    {
        bank: 'Homecredit',
        shop: 'SberShop',
        category: 'Подарки и сувениры',
        mcc: '5947',
        description: 'Если такое еще случится - платить картой сбера',
    },
    {
        bank: 'Homecredit',
        shop: 'Дикси',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Пятерочка',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Магнит',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Глобус',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Красное и белое',
        category: 'Продукты питания',
        mcc: '5921',
    },
    {
        bank: 'Homecredit',
        shop: 'Перекресток',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Ашан',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homecredit',
        shop: 'Ozon',
        category: 'Прочее',
        mcc: '5262',
    },
    {
        bank: 'Homecredit',
        shop: 'Wildberries',
        category: 'Прочее',
        mcc: '5262',
    },
    {
        bank: 'Homecredit',
        shop: 'Aliexpress',
        category: 'Прочее',
        mcc: '5399',
    },
    {
        bank: 'Homecredit',
        shop: 'Восток сервис',
        category: 'Прочее',
        mcc: '5999',
        description: 'Жаль, что не одежда и обувь :D',
    },
    {
        bank: 'Homecredit',
        shop: 'Fix price',
        category: 'Прочее',
        mcc: '5331',
    },
    {
        bank: 'Sber',
        shop: 'Суши Wok',
        category: 'Прочие списания',
        mcc: '?',
        description: 'Наебалово! За неделю до суши вок был "Кафе и рестораны" по мнению Home Credit',
    },
    {
        bank: 'Homecredit',
        shop: 'Tutu.ru',
        category: 'Путешествия',
        mcc: '4722',
        description: 'Автобус Горно-Алтайск - Усть-Кокса',
    },
    {
        bank: 'Tinkoff',
        shop: 'Дом музыки',
        category: 'Развлечения',
        mcc: '7922',
    },
    {
        bank: 'Tinkoff',
        shop: 'Fix Price',
        category: 'Различные товары',
        mcc: '5331',
    },
    {
        bank: 'Homecredit',
        shop: 'Tele2',
        category: 'Связь',
        mcc: '4814',
    },
    {
        bank: 'Homecredit',
        shop: 'NetByNet',
        category: 'Связь',
        mcc: '4816',
    },
    {
        bank: 'Homecredit',
        shop: 'Activesport',
        category: 'Спорттовары',
        mcc: '5941',
    },
    {
        bank: 'Tinkoff',
        shop: 'Aliexpress',
        category: 'Супермаркеты',
        mcc: '5300',
    },
    {
        bank: 'Tinkoff',
        shop: 'Ozon',
        category: 'Супермаркеты',
        mcc: '5300',
    },
    {
        bank: 'Tinkoff',
        shop: 'Wildberries',
        category: 'Супермаркеты',
        mcc: '5300',
    },
    {
        bank: 'Tinkoff',
        shop: 'Пятерочка',
        category: 'Супермаркеты',
        mcc: '5411',
    },
    {
        bank: 'Tinkoff',
        shop: 'Яндекс.Такси',
        category: 'Такси и каршеринг',
        mcc: '4121',
    },
    {
        bank: 'Tinkoff',
        shop: 'Додо пицца',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'Столовка в офисе',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'Додо пицца',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'KFC',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'Суши стор',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'Бургер Кинг',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homecredit',
        shop: 'Ситилинк',
        category: 'Электроника',
        mcc: '5722',
    },
    {
        bank: 'Homecredit',
        shop: 'DNS',
        category: 'Электроника',
        mcc: '5722',
    },
    {
        bank: 'Tinkoff',
        shop: 'DNS',
        category: 'Электроника и техника',
        mcc: '5722',
    },
    {
        bank: 'Tinkoff',
        shop: 'Яндекс.Маркет',
        category: 'Дом и ремонт',
        mcc: '3990',
        date: '03.02.2023',
        description: 'Оплата картой на сайте',
    },
    {
        bank: 'Homecredit',
        shop: 'Яндекс.Маркет',
        category: 'Прочее',
        mcc: '5262',
        date: '03.02.2023',
        description: 'Оплата картой на сайте',
    },
    {
        bank: 'Homecredit',
        shop: 'Яндекс.Маркет',
        category: 'Прочее',
        mcc: '5999',
        date: '03.02.2023',
        description: 'Оплата картой на пункте выдачи',
    },
    {
        bank: 'Tinkoff',
        shop: 'Сбермаркет',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '03.02.2023',
    },
    {
        bank: 'Tinkoff',
        shop: 'Мосоперетта',
        category: 'Развлечения',
        mcc: '7922',
        date: '11.02.2023',
        description:
            'Кэшбэк 5% в разделе Афиша - фуфло! Сервисный сбор за 1 билет составил бы 260 руб. Кэшбэк за 2 билета 2600*2*0,05=260 => сервисный сбор в 2 раза дороже, чем кэшбэк',
    },
    {
        bank: 'Homecredit',
        shop: 'Мосоперетта',
        category: 'Досуг и развлечения',
        mcc: '7922',
        date: '11.02.2023',
    },
    {
        bank: 'Tinkoff',
        shop: 'МегаМаркет',
        category: 'Электроника и техника',
        mcc: '5732',
        date: '02.07.2023',
    },
    {
        bank: 'Sber',
        shop: 'Столовка в офисе',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '08.08.2023',
        description:
            '530 руб. 25 бонусов СберСпасибо (4,7%): 2,5 бонусов - базовые, 22,5 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Homecredit',
        shop: 'Vyezdnaya torgovlya',
        category: 'Общественный транспорт',
        mcc: '4111',
        date: '13.08.2023',
        description: 'Оплата билета в электричке контролеру. По предварительному проездному талону',
    },
    {
        bank: 'Sber',
        shop: 'Додо пицца',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '13.08.2023',
        description:
            '1408 руб. 70 бонусов СберСпасибо (4.97%): 7 бонусов - базовые, 63 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Sber',
        shop: 'Вкусно и точка',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '27.08.2023',
        description:
            '1031 руб. 50 бонусов СберСпасибо (4.8%): 5 бонусов - базовые, 45 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Homecredit',
        shop: 'SPLAV MAGAZIN',
        category: 'Одежда и обувь',
        mcc: '5699',
        date: '05.09.2023',
        description: 'tur-eda.ru, Территория странствий, оплата на кассе',
    },
    {
        bank: 'Homecredit',
        shop: 'Uralairline',
        category: 'Авиа и ж/д билеты',
        mcc: '4511',
        date: '10.09.2023',
    },
    {
        bank: 'Homecredit',
        shop: 'Spar',
        category: 'Продукты питания',
        mcc: '5411',
        date: '27.09.2023',
        description: 'Оплата на кассе самообслуживания',
    },
    {
        bank: 'Homecredit',
        shop: 'Спортмастер',
        category: 'Спорттовары',
        mcc: '5655',
        date: '01.10.2023',
        description: 'Оплата на кассе Спортмастер ТЦ "Гагаринский"',
    },
    {
        bank: 'Homecredit',
        shop: 'Госуслуги',
        category: 'Прочее',
        mcc: '9311',
        date: '04.10.2023',
        description: 'Госпошлина',
    },
    {
        bank: 'Tinkoff',
        shop: 'Kassir.ru',
        category: 'Развлечения',
        mcc: '7972',
        date: '12.10.2023',
        description: 'Билет на концерт Lumen в клубе Base за 1980 руб. Кэшбэк 5% (99 руб) по категории "Развлечения"',
    },
    {
        bank: 'Sber',
        shop: 'Госуслуги',
        category: 'Прочие списания',
        mcc: '9311',
        date: '27.10.2023',
        description: 'Госпошлина. Пофиг, какой картой платить. На MCC 9311 кэшбэка не бывает',
    },
    {
        bank: 'Sber',
        shop: 'АльфаСтрахование',
        category: 'Оплата товаров и услуг',
        mcc: '6300',
        date: '27.10.2023',
        description: 'Счет за полис "Стоматология на базе клиник ДМС", цена 17760 руб., Поликлиника.ру. Пофиг, какой картой платить. На MCC 6300 кэшбэка не бывает',
    },
];
export default shopCategories;
