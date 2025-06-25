<template>
  <v-app>
    <v-container class="pa-4" style="max-width: 600px">

      <!-- 🔹 v-form -->
      <v-form>
        <!-- v-text-field -->
        <v-text-field
          label="v-text-field"
          placeholder="텍스트 입력"
          class="mb-4"
        />

        <!-- v-textarea -->
        <v-textarea
          label="v-textarea"
          placeholder="여러 줄 입력"
          class="mb-4"
        />

        <!-- v-select -->
        <v-select
          label="v-select"
          :items="['옵션 1', '옵션 2', '옵션 3']"
          class="mb-4"
        />

        <!-- v-autocomplete -->
        <v-autocomplete
          label="v-autocomplete"
          :items="['Apple', 'Banana', 'Cherry']"
          class="mb-4"
        />

        <!-- v-radio-group -->
        <v-radio-group v-model="radio" label="v-radio-group" class="mb-4">
          <v-radio label="Option A" value="A" />
          <v-radio label="Option B" value="B" />
        </v-radio-group>

        <!-- v-checkbox -->
        <v-checkbox
          v-model="checkbox"
          label="v-checkbox - 체크박스"
          class="mb-4"
        />

        <!-- v-switch -->
        <v-switch
          v-model="switchValue"
          label="v-switch - 토글 스위치"
          class="mb-4"
        />

      </v-form>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('')
const checkbox = ref(false)
const switchValue = ref(false)
</script>
