const shopCategories = [
    {
        bank: 'Homebank',
        shop: 'Аэрофлот',
        category: 'Авиа и ж/д билеты',
        mcc: '3011',
    },
    {
        bank: 'T-bank',
        shop: 'Столички',
        category: 'Аптеки',
        mcc: '5912',
    },
    {
        bank: 'Homebank',
        shop: 'Столички',
        category: 'Аптеки',
        mcc: '5912',
    },
    {
        bank: 'Homebank',
        shop: 'Леруа Мерлен',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homebank',
        shop: 'Оби',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homebank',
        shop: 'Все инструменты',
        category: 'Дом',
        mcc: '5200',
    },
    {
        bank: 'Homebank',
        shop: 'Бассейн',
        category: 'Досуг и развлечения',
        mcc: '7997',
    },
    {
        bank: 'Homebank',
        shop: 'Суши Wok',
        category: 'Кафе и рестораны',
        mcc: '5811',
    },
    {
        bank: 'T-bank',
        shop: 'Киномакс',
        category: 'Кино',
        mcc: '7832',
    },
    {
        bank: 'Homebank',
        shop: 'Музей востока',
        category: 'Налоги и сборы',
        mcc: '9399',
    },
    {
        bank: 'Homebank',
        shop: 'Мои документы',
        category: 'Налоги и сборы',
        mcc: '9399',
    },
    {
        bank: 'Homebank',
        shop: 'ЦППК',
        category: 'Общественный транспорт',
        mcc: '4111',
        description: 'Электричка',
    },
    {
        bank: 'Homebank',
        shop: 'Метро',
        category: 'Общественный транспорт',
        mcc: '4111',
        description: 'Тройка',
    },
    {
        bank: 'Homebank',
        shop: 'Аэроэкспресс',
        category: 'Общественный транспорт',
        mcc: '4111',
    },
    {
        bank: 'Homebank',
        shop: 'Стрелка',
        category: 'Общественный транспорт',
        mcc: '4131',
    },
    {
        bank: 'Homebank',
        shop: 'Фамилия',
        category: 'Одежда и обувь',
        mcc: '5651',
    },
    {
        bank: 'Homebank',
        shop: 'Сплав',
        category: 'Одежда и обувь',
        mcc: '5611',
        date: '24.12.2022',
    },
    {
        bank: 'Homebank',
        shop: 'Онлайн трейд',
        category: 'Одежда и обувь',
        mcc: '5311',
        description: 'Неожиданно',
    },
    {
        bank: 'Homebank',
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
        bank: 'Homebank',
        shop: 'SberShop',
        category: 'Подарки и сувениры',
        mcc: '5947',
        description: 'Если такое еще случится - платить картой сбера',
    },
    {
        bank: 'Homebank',
        shop: 'Дикси',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Пятерочка',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Магнит',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Глобус',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Красное и белое',
        category: 'Продукты питания',
        mcc: '5921',
    },
    {
        bank: 'Homebank',
        shop: 'Перекресток',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Ашан',
        category: 'Продукты питания',
        mcc: '5411',
    },
    {
        bank: 'Homebank',
        shop: 'Ozon',
        category: 'Прочее',
        mcc: '5262',
    },
    {
        bank: 'Homebank',
        shop: 'Wildberries',
        category: 'Прочее',
        mcc: '5262',
    },
    {
        bank: 'Homebank',
        shop: 'Aliexpress',
        category: 'Прочее',
        mcc: '5399',
    },
    {
        bank: 'Homebank',
        shop: 'Восток сервис',
        category: 'Прочее',
        mcc: '5999',
        description: 'Жаль, что не одежда и обувь :D',
    },
    {
        bank: 'Homebank',
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
        bank: 'Homebank',
        shop: 'Tutu.ru',
        category: 'Путешествия',
        mcc: '4722',
        description: 'Автобус Горно-Алтайск - Усть-Кокса',
    },
    {
        bank: 'T-bank',
        shop: 'Дом музыки',
        category: 'Развлечения',
        mcc: '7922',
    },
    {
        bank: 'T-bank',
        shop: 'Fix Price',
        category: 'Различные товары',
        mcc: '5331',
    },
    {
        bank: 'Homebank',
        shop: 'Tele2',
        category: 'Связь',
        mcc: '4814',
    },
    {
        bank: 'Homebank',
        shop: 'NetByNet',
        category: 'Связь',
        mcc: '4816',
    },
    {
        bank: 'Homebank',
        shop: 'Activesport',
        category: 'Спорттовары',
        mcc: '5941',
    },
    {
        bank: 'T-bank',
        shop: 'Aliexpress',
        category: 'Супермаркеты',
        mcc: '5300',
        date: '09.12.23',
    },
    {
        bank: 'T-bank',
        shop: 'Ozon',
        category: 'Супермаркеты',
        mcc: '5300',
    },
    {
        bank: 'T-bank',
        shop: 'Wildberries',
        category: 'Супермаркеты',
        mcc: '5300',
    },
    {
        bank: 'T-bank',
        shop: 'Пятерочка',
        category: 'Супермаркеты',
        mcc: '5411',
    },
    {
        bank: 'T-bank',
        shop: 'Яндекс.Такси',
        category: 'Такси и каршеринг',
        mcc: '4121',
    },
    {
        bank: 'T-bank',
        shop: 'Додо пицца',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'Столовка в офисе',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'Додо пицца',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'KFC',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'Суши стор',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'Бургер Кинг',
        category: 'Фастфуд',
        mcc: '5814',
    },
    {
        bank: 'Homebank',
        shop: 'Ситилинк',
        category: 'Электроника',
        mcc: '5722',
    },
    {
        bank: 'Homebank',
        shop: 'DNS',
        category: 'Электроника',
        mcc: '5722',
    },
    {
        bank: 'T-bank',
        shop: 'DNS',
        category: 'Электроника и техника',
        mcc: '5722',
    },
    {
        bank: 'T-bank',
        shop: 'Яндекс.Маркет',
        category: 'Дом и ремонт',
        mcc: '3990',
        date: '03.02.23',
        description: 'Оплата картой на сайте',
    },
    {
        bank: 'Homebank',
        shop: 'Яндекс.Маркет',
        category: 'Прочее',
        mcc: '5262',
        date: '03.02.23',
        description: 'Оплата картой на сайте',
    },
    {
        bank: 'Homebank',
        shop: 'Яндекс.Маркет',
        category: 'Прочее',
        mcc: '5999',
        date: '03.02.23',
        description: 'Оплата картой на пункте выдачи',
    },
    {
        bank: 'T-bank',
        shop: 'Сбермаркет',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '03.02.23',
    },
    {
        bank: 'T-bank',
        shop: 'Мосоперетта',
        category: 'Развлечения',
        mcc: '7922',
        date: '11.02.23',
        description:
            'Кэшбэк 5% в разделе Афиша - фуфло! Сервисный сбор за 1 билет составил бы 260 руб. Кэшбэк за 2 билета 2600*2*0,05=260 => сервисный сбор в 2 раза дороже, чем кэшбэк',
    },
    {
        bank: 'Homebank',
        shop: 'Мосоперетта',
        category: 'Досуг и развлечения',
        mcc: '7922',
        date: '11.02.23',
    },
    {
        bank: 'T-bank',
        shop: 'МегаМаркет',
        category: 'Электроника и техника',
        mcc: '5732',
        date: '02.07.23',
    },
    {
        bank: 'Sber',
        shop: 'Столовка в офисе',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '08.08.23',
        description:
            '530 руб. 25 бонусов СберСпасибо (4,7%): 2,5 бонусов - базовые, 22,5 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Homebank',
        shop: 'Vyezdnaya torgovlya',
        category: 'Общественный транспорт',
        mcc: '4111',
        date: '13.08.23',
        description: 'Оплата билета в электричке контролеру. По предварительному проездному талону',
    },
    {
        bank: 'Sber',
        shop: 'Додо пицца',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '13.08.23',
        description:
            '1408 руб. 70 бонусов СберСпасибо (4.97%): 7 бонусов - базовые, 63 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Sber',
        shop: 'Вкусно и точка',
        category: 'Оплата товаров и услуг',
        mcc: '5814',
        date: '27.08.23',
        description:
            '1031 руб. 50 бонусов СберСпасибо (4.8%): 5 бонусов - базовые, 45 бонусов - Прайм+ кафе и рестораны',
    },
    {
        bank: 'Homebank',
        shop: 'SPLAV MAGAZIN',
        category: 'Одежда и обувь',
        mcc: '5699',
        date: '05.09.23',
        description: 'tur-eda.ru, Территория странствий, оплата на кассе',
    },
    {
        bank: 'Homebank',
        shop: 'Uralairline',
        category: 'Авиа и ж/д билеты',
        mcc: '4511',
        date: '10.09.23',
    },
    {
        bank: 'Homebank',
        shop: 'Spar',
        category: 'Продукты питания',
        mcc: '5411',
        date: '27.09.23',
        description: 'Оплата на кассе самообслуживания',
    },
    {
        bank: 'Homebank',
        shop: 'Спортмастер',
        category: 'Спорттовары',
        mcc: '5655',
        date: '01.10.23',
        description: 'Оплата на кассе Спортмастер ТЦ "Гагаринский"',
    },
    {
        bank: 'Homebank',
        shop: 'Госуслуги',
        category: 'Прочее',
        mcc: '9311',
        date: '04.10.23',
        description: 'Госпошлина',
    },
    {
        bank: 'T-bank',
        shop: 'Kassir.ru',
        category: 'Развлечения',
        mcc: '7972',
        date: '12.10.23',
        description: 'Билет на концерт Lumen в клубе Base за 1980 руб. Кэшбэк 5% (99 руб) по категории "Развлечения"',
    },
    {
        bank: 'Sber',
        shop: 'Госуслуги',
        category: 'Прочие списания',
        mcc: '9311',
        date: '27.10.23',
        description: 'Госпошлина. Пофиг, какой картой платить. На MCC 9311 кэшбэка не бывает',
    },
    {
        bank: 'Sber',
        shop: 'АльфаСтрахование',
        category: 'Оплата товаров и услуг',
        mcc: '6300',
        date: '27.10.23',
        description:
            'Счет за полис "Стоматология на базе клиник ДМС", цена 17760 руб., Поликлиника.ру. Пофиг, какой картой платить. На MCC 6300 кэшбэка не бывает',
    },
    {
        bank: 'Alfa',
        shop: 'Пятерочка',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '01.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Wildberries',
        category: 'Супермаркеты',
        mcc: '5300',
        date: '03.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Вкусно - и точка',
        category: 'Фастфуд',
        mcc: '5814',
        date: '04.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Сплав',
        category: 'Одежда и обувь',
        mcc: '5611',
        date: '04.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Столички',
        category: 'Здоровье',
        mcc: '5912',
        date: '04.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Леруа Мерлен',
        category: 'Дом и ремонт',
        mcc: '5200',
        date: '04.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Глобус',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '04.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Ozon',
        category: 'Супермаркеты',
        mcc: '5300',
        date: '05.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Онлайн трейд',
        category: 'Супермаркеты',
        mcc: '5399',
        date: '06.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Метро',
        category: 'Транспорт',
        mcc: '4111',
        date: '07.11.23',
        description: 'Тройка',
    },
    {
        bank: 'Alfa',
        shop: 'Додо Пицца',
        category: 'Фастфуд',
        mcc: '5814',
        date: '10.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Яндекс Маркет',
        category: 'Маркетплейсы',
        mcc: '3990',
        date: '11.11.23',
        description: '',
    },
    {
        bank: 'Alfa',
        shop: 'Яндекс Маркет',
        category: 'Техника',
        mcc: '3990',
        date: '13.11.23',
        description: '11.11 ЯМ был Маркетплейсом',
    },
    {
        bank: 'Alfa',
        shop: 'Дикси',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '14.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Ростикс Мега Белая Дача',
        category: 'Фастфуд',
        mcc: '5814',
        date: '18.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Столовка в офисе',
        category: 'Фастфуд',
        mcc: '5814',
        date: '21.11.23',
        description: 'Если по Альфе нет Фастфуда, то платить Сбером',
    },
    {
        bank: 'Alfa',
        shop: 'ЦППК',
        category: 'Транспорт',
        mcc: '4111',
        date: '21.11.23',
        description: 'Электричка',
    },
    {
        bank: 'Alfa',
        shop: 'Перекресток',
        category: 'Продукты',
        mcc: '5411',
        date: '23.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Магнит',
        category: 'Продукты',
        mcc: '5411',
        date: '29.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Лента',
        category: 'Продукты',
        mcc: '5411',
        date: '30.11.23',
    },
    {
        bank: 'Alfa',
        shop: 'Все инструменты',
        category: 'Дом и ремонт',
        mcc: '5200',
        date: '04.12.23',
    },
    {
        bank: 'Alfa',
        shop: 'Wildberries',
        category: 'Маркетплейсы',
        mcc: '5300',
        date: '07.12.23',
        description: '03.11 WB был супермаркетом',
    },
    {
        bank: 'Alfa',
        shop: 'Московские окна',
        category: 'Дом и ремонт',
        mcc: '5200',
        date: '08.12.23',
        description:
            'Оплата на сайте второй части. При оплате первой части в терминале у замерщика это был 5331 и категория Продукты',
    },
    {
        bank: 'Alfa',
        shop: 'AliExpress',
        category: 'Маркетплейсы',
        mcc: '5300',
        date: '09.12.23',
    },
    {
        bank: 'Alfa',
        shop: 'Поликлиника.ру',
        category: 'Здоровье',
        mcc: '8011',
        date: '25.01.24',
        description: 'Зуб.ру плановая коррекция. Стоматология входит в категорию "Здоровье". Кэшбэк 5% начислили',
    },
    {
        bank: 'T-bank',
        shop: 'Desport',
        category: 'Спорттовары',
        mcc: '5941',
        date: '28.01.24',
        description: 'Декатлон',
    },
    {
        bank: 'T-bank',
        shop: 'Перекресток',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '01.02.24',
        description:
            'Заказ на perekrestok.ru. Кэшбэк Тинькофф 10% "За заказы продуктов и других товаров на perekrestok.ru и в приложении Перекресток с доставкой за 60 минут". Доставка не экспресс, а на следующий день. Кэшбэк 10% начислили. Ограничений по сумме заказа и количеству заказов в месяц нет.',
    },
    {
        bank: 'Sber',
        shop: 'Askona',
        category: 'Товары для дома',
        mcc: '5712',
        date: '12.05.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Билайн',
        category: 'Связь',
        mcc: '4812',
        date: '03.06.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Киоск мороженое',
        category: 'Супермаркет',
        mcc: '5451',
        date: '04.06.24',
        description: 'Рядом с домом киоск с мороженым',
    },
    {
        bank: 'Mkb',
        shop: 'Овощи и фрукты',
        category: 'Супермаркет',
        mcc: '5411',
        date: '09.06.24',
        description: 'Рядом с домом у чурок',
    },
    {
        bank: 'Mkb',
        shop: 'ЦППК',
        category: 'Путешествия',
        mcc: '4111',
        date: '12.06.24',
        description: 'Тройка',
    },
    {
        bank: 'Mkb',
        shop: 'AliExpress',
        category: 'Магазины оптовых продаж',
        mcc: '5300',
        date: '14.06.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Леруа Мерлен',
        category: 'Строительные материалы и услуги',
        mcc: '5200',
        date: '24.06.24',
        description: 'Оплата картой в оффлайн магазине',
    },
    {
        bank: 'Mkb',
        shop: 'Onlinetrade.ru Онлайн трейд',
        category: 'Супермаркет',
        mcc: '5399',
        date: '09.07.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Детский мир',
        category: 'Игрушки, игры и хобби-товары',
        mcc: '5945',
        date: '10.07.24',
        description:
            'Заказ через мобильное приложение, предоплата. Кэшбэк 5%. В банке категория "Общие продажи и рынки"',
    },
    {
        bank: 'Mkb',
        shop: 'Яндекс Маркет',
        category: 'Прочее',
        mcc: '3990',
        date: '21.07.24',
        description: 'Предоплата',
    },
    {
        bank: 'Mkb',
        shop: 'Wildberries',
        category: 'Магазины оптовых продаж',
        mcc: '5300',
        date: '25.07.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Ozon',
        category: 'Магазины оптовых продаж',
        mcc: '5300',
        date: '25.07.24',
        description: '',
    },
    {
        bank: 'Mkb',
        shop: 'Avito',
        category: 'Магазины оптовых продаж',
        mcc: '5300',
        date: '26.07.24',
        description: 'Заказ с Авито доставкой',
    },
    {
        bank: 'Mkb',
        shop: 'Intronex',
        category: 'Коммунальные услуги',
        mcc: '4900',
        date: '06.08.24',
        description: 'Интернет на даче',
    },
    {
        bank: 'Sber',
        shop: 'ПСКБ',
        category: 'Здоровье и красота',
        mcc: '8071',
        date: '06.08.24',
        description: 'Контракт',
    },
    {
        bank: 'Sber',
        shop: 'Вкусвилл',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '06.08.24',
        description: 'Оплата картой в оффлайн магазине',
    },
    {
        bank: 'Sber',
        shop: 'Поликлиника.ру',
        category: 'Здоровье и красота',
        mcc: '8062',
        date: '11.07.24',
        description: 'Зуб.ру плановая коррекция. Для сбера этот MCC входит в "Медицинские услуги"',
    },
    {
        bank: 'Mkb',
        shop: 'Поликлиника.ру',
        category: 'Здоровье',
        mcc: '8062',
        date: '15.08.24',
        description:
            'Зуб.ру ретейнеры. Это не "Стоматология", а "Здоровье". Выбирала в МКБ на 3 квартал 5% стоматология. Для Зуб.ру бесполезен. Кэшбэк не начислили. Надо было платить Сбером в этом месяце',
    },
    {
        bank: 'Sber',
        shop: 'Магнит',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '01.12.24',
        description: '',
    },
    {
        bank: 'Sber',
        shop: 'Купер',
        category: 'Прочие списания',
        mcc: '3991',
        date: '23.12.24',
        description: '',
    },
    {
        bank: 'Sber',
        shop: 'МегаМаркет',
        category: 'Прочие списания',
        mcc: '3991',
        date: '26.12.24',
        description: '',
    },
    {
        bank: 'Sber',
        shop: 'Зуб.ру',
        category: 'Медицинские услуги',
        mcc: '8021',
        date: '26.12.24',
        description: 'Зуб.ру онлайн оплата https://zub.ru/pay_new/',
    },
    {
        bank: 'Vtb',
        shop: 'Ашан',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '04.01.25',
        description: 'Auchan.ru',
    },
    {
        bank: 'Vtb',
        shop: 'Планета здоровья',
        category: 'Аптеки',
        mcc: '5912',
        date: '08.01.25',
        description: '',
    },
    {
        bank: 'Vtb',
        shop: 'Киоск мороженое',
        category: 'Кафе и рестораны',
        mcc: '5814',
        date: '11.01.25',
        description: 'Рядом с домом киоск с мороженым',
    },
    {
        bank: 'Mkb',
        shop: 'Ozon fresh',
        category: 'Магазины оптовых продаж',
        mcc: '5300',
        date: '01.02.25',
        description:
            'Если платить на Ozon Ozon-картой, то кэшбэка нет → Ozon fresh оплачивать картой с 1% на все/Маркетплейсы/Супермаркеты',
    },
    {
        bank: 'Vtb',
        shop: 'Ozon fresh',
        category: 'Маркетплейсы',
        mcc: '5300',
        date: '12.02.25',
        description: '',
    },
    {
        bank: 'Ozon',
        shop: 'Ozon',
        category: '?',
        mcc: '?',
        date: '03.05.25',
        description:
            'Приложение Ozon банка не отображает MCC-код и категорию для покупок на Ozon. Кэшбэк за покупки на Ozon не начисляется.',
    },
    {
        bank: 'Ozon',
        shop: 'Лемана Про',
        category: 'Дом и ремонт',
        mcc: '5200',
        date: '05.05.25',
        description: '',
    },
    {
        bank: 'VTB',
        shop: 'Пятерочка',
        category: 'Супермаркеты',
        mcc: '5411',
        date: '06.05.25',
        description: '',
    },
    {
        bank: 'T-bank',
        shop: 'DNS',
        category: 'Дом и ремонт',
        mcc: '5722',
        date: '06.05.25',
        description: '',
    },
    {
        bank: 'T-bank',
        shop: 'Яндекс Лавка',
        category: 'Супермаркеты',
        mcc: '3990',
        date: '13.05.25',
        description: '',
    },
    {
        bank: 'Vtb',
        shop: 'Яндекс Лавка',
        category: 'Супермаркеты',
        mcc: '3990',
        date: '18.05.25',
        description: '',
    },
    {
        bank: 'Alfa | T-bank | Sber | Mkb | Ozon | Vtb',
        shop: 'Template',
        category: '',
        mcc: '',
        date: '',
        description: '',
    },
];
export default shopCategories;
