<template>
    <div>
        <EmpiricalTable />
    </div>
</template>

<script>
export default {
    components: {
        EmpiricalTable: () => import('@/components/EmpiricalTable.vue'),
    },
};
</script>
