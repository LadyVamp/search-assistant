<template>
    <div>
        <v-icon color="accent" :title="getIconLabel(category)">
            {{ getIcon(category) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: 'IconCategory',
    props: {
        category: {
            type: String,
            required: true,
            default: 'all',
        },
    },
    data() {
        return {
            iconCategories: [
                {
                    key: 'all',
                    label: 'Все категории',
                    icon: 'mdi-layers-outline',
                },
                {
                    key: 'repair',
                    label: 'Дом и ремонт',
                    icon: 'mdi-hammer-screwdriver',
                },
                {
                    key: 'equipment',
                    label: 'Снаряжение',
                    icon: 'mdi-tent',
                },
                {
                    key: 'appliances',
                    label: 'Электроника и бытовая техника',
                    icon: 'mdi-kettle',
                },
                {
                    key: 'universal',
                    label: 'Универсальный',
                    icon: 'mdi-shape',
                },
            ],
        };
    },

    methods: {
        getIcon(category) {
            return this.iconCategories.find((item) => item.key === category).icon;
        },
        getIconLabel(category) {
            return this.iconCategories.find((item) => item.key === category).label;
        },
    },
};
</script>
