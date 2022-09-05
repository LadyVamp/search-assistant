<template>
    <div>
        <SearchAssistant />
    </div>
</template>

<script>
export default {
    components: {
        SearchAssistant: () => import('@/components/SearchAssistant.vue'),
    },
};
</script>
