<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['change']);

const { type } = defineProps<{ 
    type: 'hour' | 'minute',
    value: string,
}>();

const maxValue = computed(() => type === 'hour' ? 23 : 59);

const handleChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    const firstTwoLetters = value.slice(0, 2);
    const numberValue = Number(firstTwoLetters);

    if (isNaN(numberValue) || !numberValue) {
        emit('change', '00');
        return;
    }

    if (numberValue >= 1 && numberValue <= 9) {
        emit('change', `0${numberValue}`);
        return;
    } else if (numberValue >= 10 && numberValue <= maxValue.value) {
        emit('change', numberValue.toString());
        return;
    }

    emit('change', '00');
};
</script>

<template>
    <input type="text" inputmode="numeric" :value="value" @change="handleChange" />
</template>