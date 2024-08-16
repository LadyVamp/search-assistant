const shopList = [
    {
        label: 'Все инструменты',
        value: 'vseinstrumenti',
        link: 'https://www.vseinstrumenti.ru/search_main.php?what=test',
        linkSortByPriceAsc: 'https://www.vseinstrumenti.ru/search_main.php?what=test&orderby=price',
        linkSortByRating: 'https://www.vseinstrumenti.ru/search_main.php?what=test&orderby=rating',
        category: 'repair',
    },
    {
        label: 'Леруа',
        value: 'leroymerlin',
        link: 'https://leroymerlin.ru/search/?q=test',
        linkSortByPriceAsc: 'https://leroymerlin.ru/search/?q=test&sortby=1',
        linkSortByRating: 'https://leroymerlin.ru/search/?q=test&sortby=9',
        category: 'repair',
    },
    {
        label: 'Петрович',
        value: 'petrovich',
        link: 'https://moscow.petrovich.ru/search/?q=test',
        linkSortByPriceAsc: 'https://moscow.petrovich.ru/search/?sort=price_asc&q=test',
        linkSortByRating: 'https://moscow.petrovich.ru/search/?sort=natural_desc&q=test',
        category: 'repair',
    },
    {
        label: 'Оби',
        value: 'obi',
        link: 'https://obi.ru/search?search=test',
        linkSortByPriceAsc: 'https://obi.ru/search?search=test&sortKey=price&sortDirection=ASC',
        linkSortByRating: 'https://obi.ru/search?search=test&sortKey=rating&sortDirection=DESC',
        category: 'repair',
    },
    {
        label: 'Кувалда',
        value: 'kuvalda',
        link: 'https://www.kuvalda.ru/catalog/search/?keyword=test',
        linkSortByPriceAsc: 'https://www.kuvalda.ru/catalog/search/?keyword=test',
        linkSortByRating: 'https://www.kuvalda.ru/catalog/search/?keyword=palisad&sort=popularity',
        category: 'repair',
    },
    {
        label: 'Восток',
        value: 'vostok',
        link: 'https://vostok.ru/search/catalog/?query=test',
        linkSortByPriceAsc: 'https://vostok.ru/search/catalog/?query=test&order=price_asc',
        linkSortByRating: 'https://vostok.ru/search/catalog/?query=test&order=hit',
        category: 'equipment',
    },
    {
        label: 'Сплав',
        value: 'splav',
        link: 'https://www.splav.ru/search/?q=test',
        linkSortByPriceAsc: 'https://www.splav.ru/search/?q=test&sort=price&order=asc',
        linkSortByRating: 'https://www.splav.ru/search/?sort=show_counter&order=desc&q=test',
        category: 'equipment',
    },
    {
        label: 'Спортмастер',
        value: 'sportmaster',
        link: 'https://www.sportmaster.ru/catalog/product/search.do/?text=test',
        category: 'equipment',
    },
    {
        label: 'Кант',
        value: 'kant',
        link: 'https://www.kant.ru/search/?q=test',
        linkSortByPriceAsc: 'https://www.kant.ru/search/?q=test#/filter:sort=price&order=asc&',
        linkSortByRating: 'https://www.kant.ru/search/?q=test#/filter:sort=rating&order=desc&',
        category: 'equipment',
    },
    {
        label: 'МВидео',
        value: 'mvideo',
        link: 'https://www.mvideo.ru/product-list-page?q=test',
        linkSortByPriceAsc: 'https://www.mvideo.ru/product-list-page?q=test&sort=price_asc',
        linkSortByRating: 'https://www.mvideo.ru/product-list-page?q=test&sort=rating_desc',
        category: 'appliances',
    },
    {
        label: 'Эльдорадо',
        value: 'eldorado',
        link: 'https://www.eldorado.ru/search/catalog.php?q=test',
        linkSortByPriceAsc: 'https://www.eldorado.ru/search/catalog.php?q=test&sort=price&type=ASC',
        linkSortByRating: 'https://www.eldorado.ru/search/catalog.php?q=test&sort=rating',
        category: 'appliances',
    },
    {
        label: 'DNS',
        value: 'dns',
        link: 'https://www.dns-shop.ru/search/?q=test',
        linkSortByPriceAsc: 'https://www.dns-shop.ru/search/?q=test&order=price-asc',
        linkSortByRating: 'https://www.dns-shop.ru/search/?q=test&order=rating',
        category: 'appliances',
    },
    {
        label: 'Технопарк',
        value: 'technopark',
        link: 'https://www.technopark.ru/search/?q=test&filter_Наличие[0]=в%20наличии',
        linkSortByPriceAsc:
            'https://www.technopark.ru/search/?q=test&order=price&dir=asc&filter_Наличие[0]=в%20наличии',
        linkSortByRating:
            'https://www.technopark.ru/search/?q=test&order=rating&dir=desc&filter_Наличие[0]=в%20наличии',
        category: 'appliances',
    },
    {
        label: 'Плеер',
        value: 'pleer',
        link: 'https://www.pleer.ru/search_test.html',
        linkSortByPriceAsc: 'https://www.pleer.ru/search_test_1-0,2-0,7-(),3-(),4-(),5-0,8-0,9-0,6-3',
        linkSortByRating: 'https://www.pleer.ru/search_test_1-0,2-0,7-(),3-(),4-(),5-0,8-0,9-0,6-8.html',
        category: 'appliances',
    },
    {
        label: 'Холодильник',
        value: 'holodilnik',
        link: 'https://www.holodilnik.ru/search/?search=test',
        linkSortByPriceAsc: 'https://www.holodilnik.ru/search/?search=test&sort=price',
        linkSortByRating: 'https://www.holodilnik.ru/search/?search=test&page=1&sort=hru',
        category: 'appliances',
    },
    {
        label: 'Wildberries',
        value: 'Wildberries',
        link: 'https://www.wildberries.ru/catalog/0/search.aspx?search=test',
        linkSortByPriceAsc: 'https://www.wildberries.ru/catalog/0/search.aspx?search=test&sort=priceup',
        linkSortByRating: 'https://www.wildberries.ru/catalog/0/search.aspx?search=test&sort=rate',
        category: 'universal',
    },
    {
        label: 'Ozon',
        value: 'Ozon',
        link: 'https://www.ozon.ru/search/?text=test',
        linkSortByPriceAsc: 'https://www.ozon.ru/search/?text=test&sorting=ozon_card_price',
        linkSortByRating: 'https://www.ozon.ru/search/?text=test&sorting=rating',
        category: 'universal',
    },
    {
        label: 'МегаМаркет',
        value: 'megamarket',
        link: 'https://megamarket.ru/catalog/?q=test',
        linkSortByPriceAsc: 'https://megamarket.ru/catalog/?q=test#?sort=1',
        linkSortByRating: 'https://megamarket.ru/catalog/?q=test#?sort=3',
        category: 'universal',
    },
    {
        label: 'Купер',
        value: 'kuper',
        link: 'https://kuper.ru/multisearch?q=test&shippingMethod=by_courier&sid=16&vertical=all',
        linkSortByPriceAsc:
            'https://kuper.ru/multisearch?q=test&shippingMethod=by_courier&sid=16&vertical=all&sort=unit_price_asc',
        linkSortByRating: 'https://kuper.ru/multisearch?q=test&shippingMethod=by_courier&sid=16&vertical=all',
        category: 'universal',
    },
    {
        label: 'Aliexpress',
        value: 'aliexpress',
        link: 'https://aliexpress.ru/wholesale?SearchText=test&isFreeShip=y&SortType=total_tranpro_desc',
        linkSortByPriceAsc: 'https://aliexpress.ru/wholesale?SearchText=test&isFreeShip=y&SortType=price_asc',
        linkSortByRating: 'https://aliexpress.ru/wholesale?SearchText=test&isFreeShip=y&SortType=default',
        category: 'universal',
    },
    {
        label: 'Онлайн трейд',
        value: 'onlinetrade',
        link: 'https://www.onlinetrade.ru/sitesearch.html?query=test',
        linkSortByPriceAsc: 'https://www.onlinetrade.ru/sitesearch.html?query=+test&sort=price-asc',
        linkSortByRating: 'https://www.onlinetrade.ru/sitesearch.html?query=+test&sort=reviews-desc',
        category: 'universal',
    },
    {
        label: 'Яндекс Маркет',
        value: 'market',
        link: 'https://market.yandex.ru/search?text=test',
        linkSortByPriceAsc: 'https://market.yandex.ru/search?text=test&how=aprice',
        linkSortByRating: 'https://market.yandex.ru/search?text=test&how=rorp',
        category: 'universal',
    },
    {
        label: 'Детский мир',
        value: 'detmir',
        link: 'https://www.detmir.ru/search/results/?qt=test&searchType=auto&searchMode=common',
        linkSortByPriceAsc:
            'https://www.detmir.ru/search/results/?qt=test&searchType=common&searchMode=common&order=price-asc',
        linkSortByRating:
            'https://www.detmir.ru/search/results/?qt=test&searchType=common&searchMode=common&order=rating-desc',
        category: 'universal',
    },
    {
        label: 'Столички',
        value: 'stolichki',
        link: 'https://stolichki.ru/search?name=test',
        linkSortByPriceAsc: 'https://stolichki.ru/search?name=test&sort=price%3Aasc',
        linkSortByRating: 'https://stolichki.ru/search?name=test&sort=sale%3Adesc',
        category: 'pharmacy',
    },
    {
        label: 'Ригла',
        value: 'rigla',
        link: 'https://www.rigla.ru/search?q=test',
        linkSortByPriceAsc: 'https://www.rigla.ru/search?q=test&order=price&dir=ASC',
        linkSortByRating: 'https://www.rigla.ru/search?q=test&order=relevant&dir=ASC',
        category: 'pharmacy',
    },
    {
        label: 'Горздрав',
        value: 'gorzdrav',
        link: 'https://gorzdrav.org/search/?text=test',
        linkSortByPriceAsc: 'https://gorzdrav.org/search/?sort=price-asc&q=test%3Apriority-desc#',
        linkSortByRating: 'https://gorzdrav.org/search/?sort=priority-desc&q=test%3Aprice-asc#',
        category: 'pharmacy',
    },
    {
        label: 'Eapteka',
        value: 'eapteka',
        link: 'https://www.eapteka.ru/search/?q=test',
        linkSortByPriceAsc: 'https://www.eapteka.ru/search/?sort=price&order=asc&q=test',
        linkSortByRating: 'https://www.eapteka.ru/search/?q=test',
        category: 'pharmacy',
    },
    {
        label: 'Планета здоровья',
        value: 'planetazdorovo',
        link: 'https://planetazdorovo.ru/search/?q=test',
        linkSortByPriceAsc: 'https://planetazdorovo.ru/search/?sort=price&q=test',
        linkSortByRating: 'https://planetazdorovo.ru/search/?sort=score&q=test',
        category: 'pharmacy',
    },
    {
        label: 'Асна',
        value: 'asna',
        link: 'https://www.asna.ru/search/?query=test',
        linkSortByPriceAsc: 'https://www.asna.ru/search/?query=test&sort=price',
        linkSortByRating: 'https://www.asna.ru/search/?query=test',
        category: 'pharmacy',
    },
    {
        label: 'Здравсити',
        value: 'zdravcity',
        link: 'https://zdravcity.ru/search/?what=test',
        linkSortByPriceAsc: 'https://zdravcity.ru/search/?what=test&sort=price&side=asc',
        linkSortByRating: 'https://zdravcity.ru/search/?what=test&sort=rateMarketing&side=desc',
        category: 'pharmacy',
    },
];
export default shopList;
