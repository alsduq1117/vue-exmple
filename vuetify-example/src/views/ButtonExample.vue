<template>
  <v-app>
    <v-container>

      <!-- 🔹 v-btn: 기본 버튼 -->
      <v-btn class="ma-2" color="primary">
        v-btn
      </v-btn>

      <!-- 🔹 v-icon: 아이콘 표시 -->
      <v-icon class="ma-2">
        mdi-star
      </v-icon>

      <!-- 🔹 v-btn + v-icon 조합 -->
      <v-btn icon class="ma-2">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <!-- 🔹 v-btn-toggle: 버튼 토글 -->
      <v-btn-toggle v-model="toggle" class="ma-2">
        <v-btn value="one">One</v-btn>
        <v-btn value="two">Two</v-btn>
        <v-btn value="three">Three</v-btn>
      </v-btn-toggle>

      <!-- 선택된 토글 값 출력 -->
      <div class="mt-4">
        선택된 값: <strong>{{ toggle }}</strong>
      </div>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref('one')
</script>

