<script lang="ts">
import { VContainer } from 'vuetify/components';

export default {
    extends: VContainer,
    setup: VContainer.setup
}
</script>
    
<template>
    <div class="lb-container">
        <slot />
    </div>
</template>
    
<style>
.lb-container {
    background-color: hotpink;
}
</style>