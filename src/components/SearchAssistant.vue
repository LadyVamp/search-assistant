<template>
    <v-container fluid>
        <v-btn small class="mr-2" @click="search = 'плитка'">плитка</v-btn>
        <v-btn small @click="search = 'плита настольная индукционная 2 конфорки'"> плита... </v-btn>
        <v-row>
            <v-col xs="12" md="6" class="d-flex">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Название товара"
                    single-line
                    hide-details
                ></v-text-field>
                <v-btn
                    icon
                    color="secondary"
                    class="mt-3 ml-4"
                    title="Скопировать"
                    :disabled="!search"
                    @click="copyToClipBoard(search)"
                >
                    <v-icon>mdi-content-copy</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span v-for="(item, idx) in categories" :key="idx">
                    <v-btn :disabled="!search" class="mx-1" @click="filterByCategory(item)">
                        <IconCategory :category="item" />
                    </v-btn>
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-switch v-model="isSelectedAll" :disabled="!search" label="Выбрать все" @click="selectAll"></v-switch>
                <v-switch v-model="isSortByPriceAsc" :disabled="!search" label="Sort by price asc"></v-switch>
                <div class="d-flex tooltip-rating">
                    <v-switch v-model="isSortByRating" :disabled="!search" label="Sort by rating"></v-switch>
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon color="grey" dark v-bind="attrs" v-on="on"> mdi-information-outline </v-icon>
                        </template>
                        <span>
                            В некоторых магазинах нет сортировки по рейтингу. Замены:
                            <ul>
                                <li>Восток - хиты продаж</li>
                                <li>Сплав - популярности</li>
                                <li>Спортмастер - нельзя одновременно задать поисковый запрос и сортировку</li>
                                <li>Плеер - популярные</li>
                                <li>СберМаркет - выгоднее по весу</li>
                                <li>Aliexpress - лучший выбор</li>
                                <li>Петрович - по соответствию</li>
                            </ul>
                        </span>
                        <span>Онлайн трейд не ищет запрос на кириллице</span>
                    </v-tooltip>
                </div>
            </v-col>
        </v-row>
        <!-- TODO: заменить сортировки switch на select -->
        <v-row class="mb-4">
            <v-col xs="4" md="2" class="d-flex">
                <v-select
                    v-model="selectedSortDirection"
                    :items="sortDirections"
                    menu-props="auto"
                    label="Сортировка"
                    hide-details
                    prepend-icon="mdi-sort"
                    single-line
                    @change="onChangeSortDirection"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
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
            <v-col v-if="search" class="links">
                <div v-for="(item, index) in selectedShops" :key="index" class="mb-1">
                    <a :href="productSearchLink(item)" target="_blank">{{ item.label }} </a>
                    <v-icon
                        v-if="addsUtmMarks.includes(item.value)"
                        color="accent"
                        dark
                        title="Этот магазин добавляет в адресную строку UTM-метки"
                    >
                        mdi-biohazard
                    </v-icon>
                    <v-icon
                        v-if="worksInIncognito.includes(item.value)"
                        color="accent"
                        dark
                        title="Ссылки открываются только в режиме инкогнито"
                    >
                        mdi-incognito
                    </v-icon>
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
import shopList from '/src/assets/shops.js';
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
            isSortByRating: false,
            selectedSortDirection: null,
            sortDirections: ['price asc', 'rating'],
            categories: [],
            selectedShops: [],
            shops: [],
            addsUtmMarks: ['sportmaster', 'eldorado', 'onlinetrade'],
            worksInIncognito: ['obi'],
        };
    },
    computed: {
        isMobile() {
            return screen.width <= 760 ? true : false;
        },
    },
    mounted() {
        this.loadShops();
        detectIncognito().then((result) => {
            this.isIncognito = result.isPrivate;
        });
        let categories = this.shops.map((item) => item.category);
        this.categories = [...new Set(categories)];
    },
    methods: {
        loadShops() {
            this.shops = shopList;
        },
        onChange(item) {
            if (item.selected) {
                this.selectedShops.push(item);
            } else {
                this.selectedShops.pop(item);
            }
            this.selectedShops = [...new Set(this.selectedShops)];
        },
        productSearchLink(item) {
            if (this.isSortByPriceAsc && item.linkSortByPriceAsc) {
                return item.linkSortByPriceAsc.replace('opahalo', this.search);
            }
            if (this.isSortByRating && item.linkSortByRating) {
                return item.linkSortByRating.replace('opahalo', this.search);
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
        copyToClipBoard(textToCopy) {
            navigator.clipboard.writeText(textToCopy);
        },
        onChangeSortDirection() {
            console.log('TODO onChangeSortDirection');
            console.log(this.selectedSortDirection);
        },
        filterByCategory(category) {
            let filtered = this.shops.filter((item) => item.category === category);
            this.selectedShops = [...new Set(filtered)];
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
.tooltip-rating i {
    margin-top: -35px;
    margin-left: 3px;
}
</style>
