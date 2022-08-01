<template>
    <v-container fluid>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Поиск"
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
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            selectedShops: [],
            shops: [
                {
                    label: 'Все инструменты',
                    value: 'vseinstrumenti',
                    link: 'https://www.vseinstrumenti.ru/search_main.php?what=опахало',
                    checked: true,
                },
                {
                    label: 'Леруа',
                    value: 'leroymerlin',
                    link: 'https://leroymerlin.ru/search/?q=опахало',
                    checked: false,
                },
                {
                    label: 'Wildberries',
                    value: 'Wildberries',
                    link: 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=опахало',
                    checked: false,
                },
                {
                    label: 'Ozon',
                    value: 'Ozon',
                    link: 'https://www.ozon.ru/search/?text=опахало&from_global=true',
                    checked: false,
                },
                {
                    label: 'Сбермаркет',
                    value: 'sbermarket',
                    link: 'https://sbermarket.ru/auchan/search?keywords=опахало&sid=177',
                    checked: false,
                },
            ],
        };
    },
    methods: {
        onChange(item) {
            this.selectedShops.includes(item)
                ? (this.selectedShops = this.selectedShops.filter((item) => item != item))
                : this.selectedShops.push(item);
        },
        productSearchLink(item) {
            return item.link.replace('опахало', this.search);
        },
    },
};
</script>

<style></style>
