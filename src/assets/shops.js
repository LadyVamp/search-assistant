const shopList = [
    {
        label: 'Все инструменты',
        value: 'vseinstrumenti',
        link: 'https://www.vseinstrumenti.ru/search_main.php?what=opahalo',
        linkSortByPriceAsc: 'https://www.vseinstrumenti.ru/search_main.php?what=opahalo&orderby=price',
        linkSortByRating: 'https://www.vseinstrumenti.ru/search_main.php?what=opahalo&orderby=rating',
        category: 'repair',
    },
    {
        label: 'Леруа',
        value: 'leroymerlin',
        link: 'https://leroymerlin.ru/search/?q=opahalo',
        linkSortByPriceAsc: 'https://leroymerlin.ru/search/?q=opahalo&sortby=1',
        linkSortByRating: 'https://leroymerlin.ru/search/?q=opahalo&sortby=9',
        category: 'repair',
    },
    {
        label: 'Петрович',
        value: 'petrovich',
        link: 'https://moscow.petrovich.ru/search/?q=opahalo',
        linkSortByPriceAsc: 'https://moscow.petrovich.ru/search/?sort=price_asc&q=opahalo',
        linkSortByRating: 'https://moscow.petrovich.ru/search/?sort=natural_desc&q=opahalo',
        category: 'repair',
    },
    {
        label: 'Оби',
        value: 'obi',
        link: 'https://obi.ru/search?search=opahalo',
        linkSortByPriceAsc: 'https://obi.ru/search?search=opahalo&sortKey=price&sortDirection=ASC',
        linkSortByRating: 'https://obi.ru/search?search=opahalo&sortKey=rating&sortDirection=DESC',
        category: 'repair',
    },
    {
        label: 'Восток',
        value: 'vostok',
        link: 'https://vostok.ru/search/catalog/?query=opahalo',
        linkSortByPriceAsc: 'https://vostok.ru/search/catalog/?query=opahalo&order=price_asc',
        linkSortByRating: 'https://vostok.ru/search/catalog/?query=opahalo&order=hit',
        category: 'equipment',
    },
    {
        label: 'Сплав',
        value: 'splav',
        link: 'https://www.splav.ru/search/?q=opahalo',
        linkSortByPriceAsc: 'https://www.splav.ru/search/?q=opahalo&sort=price&order=asc',
        linkSortByRating: 'https://www.splav.ru/search/?sort=show_counter&order=desc&q=opahalo',
        category: 'equipment',
    },
    {
        label: 'Спортмастер',
        value: 'sportmaster',
        link: 'https://www.sportmaster.ru/catalog/product/search.do/?text=opahalo',
        category: 'equipment',
    },
    {
        label: 'Кант',
        value: 'kant',
        link: 'https://www.kant.ru/search/?q=opahalo',
        linkSortByPriceAsc: 'https://www.kant.ru/search/?q=opahalo#/filter:sort=price&order=asc&',
        linkSortByRating: 'https://www.kant.ru/search/?q=opahalo#/filter:sort=rating&order=desc&',
        category: 'equipment',
    },
    {
        label: 'МВидео',
        value: 'mvideo',
        link: 'https://www.mvideo.ru/product-list-page?q=opahalo',
        linkSortByPriceAsc: 'https://www.mvideo.ru/product-list-page?q=opahalo&sort=price_asc',
        linkSortByRating: 'https://www.mvideo.ru/product-list-page?q=opahalo&sort=rating_desc',
        category: 'appliances',
    },
    {
        label: 'Эльдорадо',
        value: 'eldorado',
        link: 'https://www.eldorado.ru/search/catalog.php?q=opahalo',
        linkSortByPriceAsc: 'https://www.eldorado.ru/search/catalog.php?q=opahalo&sort=price&type=ASC',
        linkSortByRating: 'https://www.eldorado.ru/search/catalog.php?q=opahalo&sort=rating',
        category: 'appliances',
    },
    {
        label: 'DNS',
        value: 'dns',
        link: 'https://www.dns-shop.ru/search/?q=opahalo',
        linkSortByPriceAsc: 'https://www.dns-shop.ru/search/?q=opahalo&order=price-asc',
        linkSortByRating: 'https://www.dns-shop.ru/search/?q=opahalo&order=rating',
        category: 'appliances',
    },
    {
        label: 'Технопарк',
        value: 'technopark',
        link: 'https://www.technopark.ru/search/?q=opahalo&filter_Наличие[0]=в%20наличии',
        linkSortByPriceAsc:
            'https://www.technopark.ru/search/?q=opahalo&order=price&dir=asc&filter_Наличие[0]=в%20наличии',
        linkSortByRating:
            'https://www.technopark.ru/search/?q=opahalo&order=rating&dir=desc&filter_Наличие[0]=в%20наличии',
        category: 'appliances',
    },
    {
        label: 'Плеер',
        value: 'pleer',
        link: 'https://www.pleer.ru/search_opahalo.html',
        linkSortByPriceAsc: 'https://www.pleer.ru/search_opahalo_1-0,2-0,7-(),3-(),4-(),5-0,8-0,9-0,6-3',
        linkSortByRating: 'https://www.pleer.ru/search_opahalo_1-0,2-0,7-(),3-(),4-(),5-0,8-0,9-0,6-8.html',
        category: 'appliances',
    },
    {
        label: 'Холодильник',
        value: 'holodilnik',
        link: 'https://www.holodilnik.ru/search/?search=opahalo',
        linkSortByPriceAsc: 'https://www.holodilnik.ru/search/?search=opahalo&sort=price',
        linkSortByRating: 'https://www.holodilnik.ru/search/?search=opahalo&page=1&sort=hru',
        category: 'appliances',
    },
    {
        label: 'Wildberries',
        value: 'Wildberries',
        link: 'https://www.wildberries.ru/catalog/0/search.aspx?search=opahalo',
        linkSortByPriceAsc: 'https://www.wildberries.ru/catalog/0/search.aspx?search=opahalo&sort=priceup',
        linkSortByRating: 'https://www.wildberries.ru/catalog/0/search.aspx?search=opahalo&sort=rate',
        category: 'universal',
    },
    {
        label: 'Ozon',
        value: 'Ozon',
        link: 'https://www.ozon.ru/search/?text=opahalo',
        linkSortByPriceAsc: 'https://www.ozon.ru/search/?text=opahalo&sorting=ozon_card_price',
        linkSortByRating: 'https://www.ozon.ru/search/?text=opahalo&sorting=rating',
        category: 'universal',
    },
    {
        label: 'СберМегаМаркет',
        value: 'sbermegamarket',
        link: 'https://sbermegamarket.ru/catalog/?q=opahalo',
        linkSortByPriceAsc: 'https://sbermegamarket.ru/catalog/?q=opahalo#?sort=1',
        linkSortByRating: 'https://sbermegamarket.ru/catalog/?q=opahalo#?sort=3',
        category: 'universal',
    },
    {
        label: 'СберМаркет',
        value: 'sbermarket',
        link: 'https://sbermarket.ru/auchan/search?keywords=opahalo&sid=177',
        linkSortByPriceAsc: 'https://sbermarket.ru/auchan/search?keywords=opahalo&sid=177&sort=price_asc',
        linkSortByRating: 'https://sbermarket.ru/auchan/search?keywords=opahalo&sid=177&sort=unit_price_asc',
        category: 'universal',
    },
    {
        label: 'Aliexpress',
        value: 'aliexpress',
        link: 'https://aliexpress.ru/wholesale?SearchText=opahalo&isFreeShip=y&SortType=total_tranpro_desc',
        linkSortByPriceAsc: 'https://aliexpress.ru/wholesale?SearchText=opahalo&isFreeShip=y&SortType=price_asc',
        linkSortByRating: 'https://aliexpress.ru/wholesale?SearchText=opahalo&isFreeShip=y&SortType=default',
        category: 'universal',
    },
    {
        label: 'Онлайн трейд',
        value: 'onlinetrade',
        link: 'https://www.onlinetrade.ru/sitesearch.html?query=opahalo',
        linkSortByPriceAsc: 'https://www.onlinetrade.ru/sitesearch.html?query=+opahalo&sort=price-asc',
        linkSortByRating: 'https://www.onlinetrade.ru/sitesearch.html?query=+opahalo&sort=reviews-desc',
        category: 'universal',
    },
    {
        label: 'Яндекс Маркет',
        value: 'market',
        link: 'https://market.yandex.ru/search?text=opahalo',
        linkSortByPriceAsc: 'https://market.yandex.ru/search?text=opahalo&how=aprice',
        linkSortByRating: 'https://market.yandex.ru/search?text=opahalo&how=rorp',
        category: 'universal',
    },
    {
        label: 'Столички',
        value: 'stolichki',
        link: 'https://stolichki.ru/search?name=opahalo',
        linkSortByPriceAsc: 'https://stolichki.ru/search?name=opahalo&sort=price%3Aasc',
        linkSortByRating: 'https://stolichki.ru/search?name=opahalo&sort=sale%3Adesc',
        category: 'pharmacy',
    },
    {
        label: 'Ригла',
        value: 'rigla',
        link: 'https://www.rigla.ru/search?q=opahalo',
        linkSortByPriceAsc: 'https://www.rigla.ru/search?q=opahalo&order=price&dir=ASC',
        linkSortByRating: 'https://www.rigla.ru/search?q=opahalo&order=relevant&dir=ASC',
        category: 'pharmacy',
    },
    {
        label: 'Горздрав',
        value: 'gorzdrav',
        link: 'https://gorzdrav.org/search/?text=opahalo',
        linkSortByPriceAsc: 'https://gorzdrav.org/search/?sort=price-asc&q=opahalo%3Apriority-desc#',
        linkSortByRating: 'https://gorzdrav.org/search/?sort=priority-desc&q=opahalo%3Aprice-asc#',
        category: 'pharmacy',
    },
];
export default shopList;
