<template>
    <v-container fluid>
        <v-btn small @click="search = 'плитка'">плитка</v-btn>
        <v-btn small class="mx-2" @click="search = 'плита настольная индукционная 2 конфорки'"> плита... </v-btn>
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
                                <li>Столички - по размеру скидки</li>
                                <li>Ригла - по релевантности</li>
                                <li>Горздрав - по популярности</li>
                                <li>Кувалда - по популярности</li>
                                <li>Eapteka - по популярности</li>
                                <li>Планета здоровья - по релевантности</li>
                            </ul>
                        </span>
                        <span>Онлайн трейд не ищет запрос на кириллице</span>
                        <span>Кувалда - нет сортировки по цене</span>
                    </v-tooltip>
                </div>
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
                    <BaseLink :link="productSearchLink(item)" :label="item.label" />
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
import IconCategory from '@/components/IconCategory.vue';
import BaseLink from '@/components/Shared/BaseLink.vue';

export default {
    name: 'SearchAssistant',
    components: {
        IconCategory,
        BaseLink,
    },
    data() {
        return {
            search: '',
            isIncognito: false,
            isSelectedAll: false,
            isSortByPriceAsc: false,
            isSortByRating: false,
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
                return item.linkSortByPriceAsc.replace('test', this.search);
            }
            if (this.isSortByRating && item.linkSortByRating) {
                return item.linkSortByRating.replace('test', this.search);
            } else {
                return item.link.replace('test', this.search);
            }
        },
        openLinks() {
            const links = this.selectedShops.map((item) => item.link.replace('test', this.search));
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
