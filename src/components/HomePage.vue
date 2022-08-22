<template>
    <v-container fluid>
        <!-- {{ selectedShops }} -->
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
                <v-checkbox
                    v-for="(item, index) in shops"
                    :key="index"
                    v-model="item.selected"
                    :label="item.label"
                    :disabled="!search"
                    @change="onChange(item)"
                >
                </v-checkbox>
            </v-col>
            <v-col>
                <div v-for="(item, index) in selectedShops" :key="index">
                    <a :href="productSearchLink(item)" target="_blank">{{ item.label }} </a>
                </div>
            </v-col>
            <v-col v-if="selectedShops.length !== 0" cols="6">
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

export default {
    data() {
        return {
            search: '',
            isIncognito: false,
            selectedShops: [],
            shops: [
                {
                    label: 'Все инструменты',
                    value: 'vseinstrumenti',
                    link: 'https://www.vseinstrumenti.ru/search_main.php?what=опахало',
                },
                {
                    label: 'Леруа',
                    value: 'leroymerlin',
                    link: 'https://leroymerlin.ru/search/?q=опахало',
                },
                {
                    label: '220 вольт',
                    value: '220-volt',
                    link: 'https://www.220-volt.ru/?digiSearch=true&term=опахало&params=%7Csort%3DPRICE_ASC',
                },
                {
                    label: 'МВидео',
                    value: 'mvideo',
                    link: 'https://www.mvideo.ru/product-list-page?q=опахало',
                },
                {
                    label: 'Эльдорадо',
                    value: 'eldorado',
                    link: 'https://www.eldorado.ru/search/catalog.php?q=опахало',
                },
                {
                    label: 'DNS',
                    value: 'dns',
                    link: 'https://www.dns-shop.ru/search/?q=опахало',
                },
                {
                    label: 'Плеер',
                    value: 'pleer',
                    link: 'https://www.pleer.ru/search_опахало.html',
                },
                {
                    label: 'Холодильник',
                    value: 'holodilnik',
                    link: 'https://www.holodilnik.ru/search/?search=опахало&sort=hru',
                },
                {
                    label: 'Wildberries',
                    value: 'Wildberries',
                    link: 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=опахало',
                },
                {
                    label: 'Ozon',
                    value: 'Ozon',
                    link: 'https://www.ozon.ru/search/?text=опахало&from_global=true',
                },
                {
                    label: 'Сбермаркет',
                    value: 'sbermarket',
                    link: 'https://sbermarket.ru/auchan/search?keywords=опахало&sid=177',
                },
            ],
        };
    },
    mounted() {
        detectIncognito().then((result) => {
            console.log(result.browserName, result.isPrivate);
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
            return item.link.replace('опахало', this.search);
        },
        openLinks() {
            const links = this.selectedShops.map((item) => item.link.replace('опахало', this.search));
            links.forEach((link) => {
                window.open(link, '_blank');
            });
        },
    },
};
</script>

<style></style>
