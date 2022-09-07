<template>
    <v-container fluid>
        <v-btn small @click="search = 'плейсмат'">плейсмат</v-btn>
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
            selectedShops: [],
            shops: [
                {
                    label: 'Все инструменты',
                    value: 'vseinstrumenti',
                    link: 'https://www.vseinstrumenti.ru/search_main.php?what=опахало',
                    category: 'repair',
                },
                {
                    label: 'Леруа',
                    value: 'leroymerlin',
                    link: 'https://leroymerlin.ru/search/?q=опахало',
                    category: 'repair',
                },
                {
                    label: '220 вольт',
                    value: '220-volt',
                    link: 'https://www.220-volt.ru/?digiSearch=true&term=опахало&params=%7Csort%3DPRICE_ASC',
                    category: 'repair',
                },
                {
                    label: 'Восток',
                    value: 'vostok',
                    link: 'https://vostok.ru/search/catalog/?query=опахало',
                    category: 'repair',
                },
                {
                    label: 'Сплав',
                    value: 'splav',
                    link: 'https://www.splav.ru/search/?q=опахало',
                    category: 'repair',
                },
                {
                    label: 'МВидео',
                    value: 'mvideo',
                    link: 'https://www.mvideo.ru/product-list-page?q=опахало',
                    category: 'appliances',
                },
                {
                    label: 'Эльдорадо',
                    value: 'eldorado',
                    link: 'https://www.eldorado.ru/search/catalog.php?q=опахало',
                    category: 'appliances',
                },
                {
                    label: 'DNS',
                    value: 'dns',
                    link: 'https://www.dns-shop.ru/search/?q=опахало',
                    category: 'appliances',
                },
                {
                    label: 'Плеер',
                    value: 'pleer',
                    link: 'https://www.pleer.ru/search_опахало.html',
                    category: 'appliances',
                },
                {
                    label: 'Холодильник',
                    value: 'holodilnik',
                    link: 'https://www.holodilnik.ru/search/?search=опахало&sort=hru',
                    category: 'appliances',
                },
                {
                    label: 'Wildberries',
                    value: 'Wildberries',
                    link: 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=опахало',
                    category: 'universal',
                },
                {
                    label: 'Ozon',
                    value: 'Ozon',
                    link: 'https://www.ozon.ru/search/?text=опахало&from_global=true',
                    category: 'universal',
                },
                {
                    label: 'СберМегаМаркет',
                    value: 'sbermegamarket',
                    link: 'https://sbermegamarket.ru/catalog/?q=опахало',
                    category: 'universal',
                },
                {
                    label: 'СберМаркет',
                    value: 'sbermarket',
                    link: 'https://sbermarket.ru/auchan/search?keywords=опахало&sid=177',
                    category: 'universal',
                },
                {
                    label: 'Aliexpress',
                    value: 'aliexpress',
                    link: 'https://aliexpress.ru/wholesale?SearchText=опахало&isFreeShip=y&SortType=total_tranpro_desc',
                    category: 'universal',
                },
            ],
        };
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
            return item.link.replace('опахало', this.search);
        },
        openLinks() {
            const links = this.selectedShops.map((item) => item.link.replace('опахало', this.search));
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
