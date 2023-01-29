<template>
    <div>
        <v-card>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
        </v-card>
    </div>
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
                { text: 'description', value: 'description' },
            ],
            items: [],
        };
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
