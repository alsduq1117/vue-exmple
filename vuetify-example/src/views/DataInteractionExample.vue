<template>
  <v-app>
    <v-container class="pa-4">

      <!-- v-data-table -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-data-table</v-card-title>
        <v-data-table :headers="headers" :items="items" class="elevation-1" />
      </v-card>

      <!-- v-carousel -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-carousel</v-card-title>
        <v-carousel height="200">
          <v-carousel-item v-for="(item, i) in 3" :key="i">
            <v-sheet class="fill-height d-flex align-center justify-center" color="blue-grey lighten-2">
              <span class="text-h5 white--text">Slide {{ i + 1 }}</span>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>

      <!-- v-expansion-panel -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-expansion-panel</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel title="항목 1" text="내용 1" />
          <v-expansion-panel title="항목 2" text="내용 2" />
        </v-expansion-panels>
      </v-card>

      <!-- v-stepper -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-stepper</v-card-title>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">1단계</v-stepper-step>
            <v-divider />
            <v-stepper-step step="2">2단계</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <p>첫 번째 단계 내용</p>
              <v-btn @click="step = 2">다음</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <p>두 번째 단계 내용</p>
              <v-btn @click="step = 1">이전</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>

      <!-- v-chip -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-chip</v-card-title>
        <v-chip class="ma-2">기본 칩</v-chip>
        <v-chip class="ma-2" color="primary" text-color="white">프라이머리 칩</v-chip>
        <v-chip class="ma-2" outlined>외곽선 칩</v-chip>
      </v-card>

      <!-- v-badge -->
      <v-card class="mb-6 pa-2">
        <v-card-title>v-badge</v-card-title>
        <v-badge content="3" color="red">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-card>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)

const headers = [
  { text: '이름', value: 'name' },
  { text: '나이', value: 'age' },
]
const items = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
]
</script>
