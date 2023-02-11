<template>
    <a :href="link" target="_blank">{{ label }}</a>
</template>

<script>
export default {
    name: 'BaseLink',
    props: {
        label: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style></style>
