<template>
    <v-card>
        <v-card-title>
            <v-row>
                <v-col cols="3">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field
                ></v-col>
                <v-col cols="3">
                    <LinkButton
                        :label="'Найти в mcc-codes'"
                        :link="mccCodesLink"
                        :icon="'mdi-book-search-outline'"
                        :color="'secondary'"
                        :disabled="!search"
                    />
                </v-col>
            </v-row>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
    </v-card>
</template>

<script>
import shopCategories from '/src/assets/empirical-data.js';
import LinkButton from '@/components/Shared/Buttons/LinkButton';

export default {
    name: 'EmpiricalTable',
    components: {
        LinkButton,
    },
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
