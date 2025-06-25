<template>
  <v-app>
    <v-container>

      <!-- 🔹 v-container + v-row + v-col 기본 레이아웃 -->
      <v-row>
        <v-col cols="6">
          <v-sheet color="light-blue-lighten-4" class="pa-4 text-center">
            v-container / v-row / v-col
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet color="green-lighten-4" class="pa-4 text-center">
            6 Columns 너비
          </v-sheet>
        </v-col>
      </v-row>

      <!-- 🔹 v-sheet 단독 사용 예시 -->
      <v-sheet class="ma-4 pa-4" color="grey-lighten-2">
        <div class="text-center">v-sheet</div>
      </v-sheet>

      <!-- 🔹 v-card 기본 구조 예시 -->
      <v-card class="ma-4" width="300">
        <v-card-title>v-card</v-card-title>
        <v-card-text>
          이미지나 텍스트, 버튼 등을 포함할 수 있는 박스입니다.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text>확인</v-btn>
        </v-card-actions>
      </v-card>

    </v-container>
  </v-app>
</template>

<script setup>
// 별도 스크립트 필요 없음
</script>
