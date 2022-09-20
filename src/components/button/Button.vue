<script setup lang="ts">
defineProps(['text'])
</script>

<template>
    <button class="lb-button" @click="$emit('handleClick')">{{ text }}</button>
</template>

<style>
.lb-button {
    background-color: hotpink;
}
</style>