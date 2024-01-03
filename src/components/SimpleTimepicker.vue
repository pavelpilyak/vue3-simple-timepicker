<script setup lang="ts">
import { ref, watch } from 'vue';
import TimeInput from './TimeInput.vue';
import { clickOutside } from '../directives/clickOutside';
import { parseTime } from '../utils/parseTime';

const model = defineModel<string | undefined>();

defineProps<{ 
    placeholder?: string,
}>();

const isDropDownVisible = ref<boolean>(false);

const closeDropDown = () => {
    isDropDownVisible.value = false;
};

const toggleDropDown = () => {
    isDropDownVisible.value = !isDropDownVisible.value;
};

const vClickOutside = clickOutside;

const { hour: baseHour, minute: baseMinute } = parseTime(model.value ?? '');
const hour = ref<string>(baseHour);
const minute = ref<string>(baseMinute);

watch(() => model.value, () => {
    const { hour: newHour, minute: newMinute } = parseTime(model.value ?? '');
    hour.value = newHour;
    minute.value = newMinute;
}); 

const handleHourChange = (value: string) => {
    model.value = `${value}:${minute.value}`;
};

const handleMinuteChange = (value: string) => {
    model.value = `${hour.value}:${value}`;
};
</script>

<template>
    <div class="simple-timepicker" v-click-outside="closeDropDown">
        <div class="simple-timepicker-value" @click="toggleDropDown">
            <div v-if="model">
                {{ model }}
            </div>
            <div v-else-if="placeholder" class="simple-timepicker-value-placeholder">
                {{ placeholder }}
            </div>
        </div>
        <div v-if="isDropDownVisible" class="simple-timepicker-input">
            <TimeInput type="hour" :value="hour" @change="handleHourChange" />
            <div class="simple-timepicker-input-divider">:</div>
            <TimeInput type="minute" :value="minute" @change="handleMinuteChange" />
        </div>
    </div>
</template>