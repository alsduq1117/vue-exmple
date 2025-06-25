<template>
  <v-app>
    <v-container class="pa-4">

      <!-- v-alert -->
      <v-alert type="info" class="mb-4">
        이것은 v-alert 컴포넌트입니다.
      </v-alert>

      <!-- v-dialog -->
      <v-btn color="primary" @click="dialog = true" class="mb-2">
        v-dialog 열기
      </v-btn>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>v-dialog</v-card-title>
          <v-card-text>이것은 다이얼로그 창입니다.</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="dialog = false">닫기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- v-snackbar -->
      <v-btn color="secondary" @click="snackbar = true" class="mb-4">
        v-snackbar 열기
      </v-btn>
      <v-snackbar v-model="snackbar" timeout="3000">
        이것은 스낵바 메시지입니다.
      </v-snackbar>

      <!-- v-progress-circular -->
      <div class="mb-4">
        <v-progress-circular indeterminate color="primary" class="ma-2" />
        <span>v-progress-circular</span>
      </div>

      <!-- v-progress-linear -->
      <div class="mb-4">
        <v-progress-linear indeterminate color="secondary" class="mb-1" />
        <span>v-progress-linear</span>
      </div>

      <!-- v-tooltip -->
      <v-tooltip text="이건 v-tooltip입니다.">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="success">
            툴팁 버튼
          </v-btn>
        </template>
      </v-tooltip>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const snackbar = ref(false)
</script>
