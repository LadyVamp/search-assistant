<template>
    <v-container fluid>
        <v-btn small @click="search = 'перчатки'">перчатки</v-btn>
        <v-btn small class="mx-1" @click="search = 'noname'">noname</v-btn>
        <v-btn small @click="search = 'сито'">сито</v-btn>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Название товара"
                    single-line
                    hide-details
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-switch v-model="isSelectedAll" :disabled="!search" label="Выбрать все" @click="selectAll"></v-switch>
                <v-switch v-model="isSortByPriceAsc" :disabled="!search" label="Sort by price asc"></v-switch>
                <div v-for="(item, index) in shops" :key="index" class="d-flex">
                    <IconCategory :category="item.category" class="icon-category" />
                    <v-checkbox
                        :key="index"
                        v-model="item.selected"
                        :label="item.label"
                        :disabled="!search || isSelectedAll"
                        @change="onChange(item)"
                    >
                    </v-checkbox>
                </div>
            </v-col>
            <v-col v-if="search" class="links mt-6">
                <div v-for="(item, index) in selectedShops" :key="index" class="mb-1">
                    <a :href="productSearchLink(item)" target="_blank">{{ item.label }} </a>
                </div>
            </v-col>
            <v-col v-if="selectedShops.length !== 0 && !isMobile" cols="6">
                <div class="warning ligthen-2 text-center py-2 mb-2">
                    <v-icon>mdi-alert</v-icon> Включить инкогнито и разрешить всплывающие окна
                </div>
                <v-btn :disabled="!isIncognito" @click="openLinks"> Открыть все ссылки </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { detectIncognito } from 'detect-incognito';
import IconCategory from '@/components/IconCategory';

export default {
    name: 'SearchAssistant',
    components: {
        IconCategory,
    },
    data() {
        return {
            search: '',
            isIncognito: false,
            isSelectedAll: false,
            isSortByPriceAsc: false,
            selectedShops: [],
            shops: [
                {
                    label: 'Все инструменты',
                    value: 'vseinstrumenti',
                    link: 'https://www.vseinstrumenti.ru/search_main.php?what=opahalo',
                    link2: 'https://www.vseinstrumenti.ru/search_main.php?what=opahalo&orderby=price',
                    category: 'repair',
                },
                {
                    label: 'Леруа',
                    value: 'leroymerlin',
                    link: 'https://leroymerlin.ru/search/?q=opahalo',
                    link2: 'https://leroymerlin.ru/search/?q=opahalo&sortby=1',
                    category: 'repair',
                },
                {
                    label: 'Восток',
                    value: 'vostok',
                    link: 'https://vostok.ru/search/catalog/?query=opahalo',
                    link2: 'https://vostok.ru/search/catalog/?query=opahalo&order=price_asc',
                    category: 'equipment',
                },
                {
                    label: 'Сплав',
                    value: 'splav',
                    link: 'https://www.splav.ru/search/?q=opahalo',
                    link2: 'https://www.splav.ru/search/?q=opahalo&sort=price&order=asc',
                    category: 'equipment',
                },
                {
                    label: 'МВидео',
                    value: 'mvideo',
                    link: 'https://www.mvideo.ru/product-list-page?q=opahalo',
                    link2: 'https://www.mvideo.ru/product-list-page?q=opahalo&sort=price_asc',
                    category: 'appliances',
                },
                {
                    label: 'Эльдорадо',
                    value: 'eldorado',
                    link: 'https://www.eldorado.ru/search/catalog.php?q=opahalo',
                    link2: 'https://www.eldorado.ru/search/catalog.php?q=opahalo&sort=price&type=ASC',
                    category: 'appliances',
                },
                {
                    label: 'DNS',
                    value: 'dns',
                    link: 'https://www.dns-shop.ru/search/?q=opahalo',
                    link2: 'https://www.dns-shop.ru/search/?q=opahalo&order=price-asc',
                    category: 'appliances',
                },
                {
                    label: 'Плеер',
                    value: 'pleer',
                    link: 'https://www.pleer.ru/search_opahalo.html',
                    link2: 'https://www.pleer.ru/search_opahalo_1-0,2-0,7-(),3-(),4-(),5-0,8-0,9-0,6-3',
                    category: 'appliances',
                },
                {
                    label: 'Холодильник',
                    value: 'holodilnik',
                    link: 'https://www.holodilnik.ru/search/?search=opahalo',
                    link2: 'https://www.holodilnik.ru/search/?search=opahalo&sort=price',
                    category: 'appliances',
                },
                {
                    label: 'Wildberries',
                    value: 'Wildberries',
                    link: 'https://www.wildberries.ru/catalog/0/search.aspx?search=opahalo',
                    link2: 'https://www.wildberries.ru/catalog/0/search.aspx?search=noname&sort=priceup',
                    category: 'universal',
                },
                {
                    label: 'Ozon',
                    value: 'Ozon',
                    link: 'https://www.ozon.ru/search/?text=opahalo',
                    link2: 'https://www.ozon.ru/search/?sorting=ozon_card_price&text=opahalo',
                    category: 'universal',
                },
                {
                    label: 'СберМегаМаркет',
                    value: 'sbermegamarket',
                    link: 'https://sbermegamarket.ru/catalog/?q=opahalo',
                    link2: 'https://sbermegamarket.ru/catalog/?q=opahalo#?sort=1',
                    category: 'universal',
                },
                {
                    label: 'СберМаркет',
                    value: 'sbermarket',
                    link: 'https://sbermarket.ru/auchan/search?keywords=opahalo&sid=177',
                    link2: 'https://sbermarket.ru/auchan/search?keywords=opahalo&sid=177&sort=price_asc',
                    category: 'universal',
                },
                {
                    label: 'Aliexpress',
                    value: 'aliexpress',
                    link: 'https://aliexpress.ru/wholesale?SearchText=opahalo&isFreeShip=y&SortType=total_tranpro_desc',
                    link2: 'https://aliexpress.ru/wholesale?SearchText=opahalo&isFreeShip=y&SortType=price_asc',
                    category: 'universal',
                },
            ],
        };
    },
    computed: {
        isMobile() {
            return screen.width <= 760 ? true : false;
        },
    },
    mounted() {
        detectIncognito().then((result) => {
            this.isIncognito = result.isPrivate;
        });
    },
    methods: {
        onChange(item) {
            if (item.selected) {
                this.selectedShops.push(item);
            } else {
                this.selectedShops.pop(item);
            }
            this.selectedShops = [...new Set(this.selectedShops)];
        },
        productSearchLink(item) {
            if (this.isSortByPriceAsc) {
                return item.link2.replace('opahalo', this.search);
            } else {
                return item.link.replace('opahalo', this.search);
            }
        },
        openLinks() {
            const links = this.selectedShops.map((item) => item.link.replace('opahalo', this.search));
            links.forEach((link) => {
                window.open(link, '_blank');
            });
        },
        selectAll() {
            this.isSelectedAll ? (this.selectedShops = [...new Set(this.shops)]) : (this.selectedShops = []);
        },
    },
};
</script>

<style scoped>
.v-input--selection-controls {
    margin-top: -16px;
}
.bordered {
    border: 1px solid red;
}
.links {
    margin-top: -12px;
}
.icon-category {
    margin-right: 5px;
    margin-top: -14px;
}
</style>
