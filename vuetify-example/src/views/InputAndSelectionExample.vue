<template>
  <v-app>
    <v-container class="pa-4">

      <!-- v-date-picker -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-date-picker</v-card-title>
        <v-date-picker v-model="date" />
        <div class="mt-2">선택된 날짜: {{ date }}</div>
      </v-card>

      <!-- v-time-picker -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-time-picker</v-card-title>
        <v-time-picker v-model="time" format="24hr" />
        <div class="mt-2">선택된 시간: {{ time }}</div>
      </v-card>

      <!-- v-slider -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-slider</v-card-title>
        <v-slider v-model="sliderValue" :max="100" :step="1" />
        <div class="mt-2">슬라이더 값: {{ sliderValue }}</div>
      </v-card>

      <!-- v-range-slider -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-range-slider</v-card-title>
        <v-range-slider v-model="rangeValue" :max="100" :step="1" />
        <div class="mt-2">범위: {{ rangeValue[0] }} ~ {{ rangeValue[1] }}</div>
      </v-card>

      <!-- v-file-input -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-file-input</v-card-title>
        <v-file-input v-model="file" label="파일을 선택하세요" />
        <div class="mt-2">선택된 파일: {{ file?.name }}</div>
      </v-card>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const date = ref('')
const time = ref('')
const sliderValue = ref(50)
const rangeValue = ref([20, 80])
const file = ref(null)
</script>
