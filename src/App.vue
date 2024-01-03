<script setup lang="ts">
import { ref } from 'vue';
import SimpleTimepicker from './components/SimpleTimepicker.vue';
import './style.css';

const value1 = ref<string | undefined>();
const value2 = ref<string>('23:59');
</script>

<template>
    <div class="container">
        <SimpleTimepicker placeholder="Placeholder" v-model="value1" />
        <SimpleTimepicker placeholder="Placeholder" v-model="value2" />
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        gap: 12px;
        max-width: 400px;
    }
</style>
