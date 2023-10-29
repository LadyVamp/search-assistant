<template>
    <v-card>
        <v-card-title>
            <v-row>
                <v-col xs="12" md="3">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Поиск"
                        single-line
                        hide-details
                    ></v-text-field
                ></v-col>
                <v-col cols="3">
                    <v-btn
                        icon
                        color="secondary"
                        class="mt-3"
                        title="Найти в mcc-codes"
                        :href="mccCodesLink"
                        target="_blank"
                        :disabled="!search"
                    >
                        <v-icon>mdi-book-search-outline</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
    </v-card>
</template>

<script>
import shopCategories from '/src/assets/empirical-data.js';

export default {
    name: 'EmpiricalTable',
    data() {
        return {
            search: '',
            headers: [
                { text: 'bank', value: 'bank' },
                { text: 'shop', value: 'shop' },
                { text: 'category', value: 'category' },
                { text: 'mcc', value: 'mcc' },
                { text: 'date', value: 'date' },
                { text: 'description', value: 'description' },
            ],
            items: [],
        };
    },
    computed: {
        mccCodesLink() {
            let link = 'https://mcc-codes.ru/search/?q=' + this.search;
            return link;
        },
    },
    mounted() {
        this.loadItems();
    },
    methods: {
        loadItems() {
            this.items = shopCategories;
        },
    },
};
</script>

<style></style>
