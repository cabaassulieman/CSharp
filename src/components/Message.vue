<script setup lang="ts">

defineProps<{ message : string, count: number}>();
</script>

<template>
    
    <h1> {{message}} {{count}}</h1>

    <button  @click="$emit('sayhi')"></button>
</template>

<style scoped>

    h1{
        color: red;
    }

</style>