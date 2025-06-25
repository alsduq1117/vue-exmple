<script setup>
const routes = [
  {path: '/button', label: '버튼 컴포넌트', description: 'v-btn, v-icon 등 버튼 관련 컴포넌트 예제'},
  {path: '/form', label: '폼 요소', description: 'v-text-field, v-select, v-form 등'},
  {path: '/inputselection', label: '입력 및 선택 컴포넌트', description: 'v-radio-group, v-checkbox, v-switch 등'},
  {path: '/navigation', label: '네비게이션 UI', description: 'v-app-bar, v-footer, v-tabs 등 레이아웃 컴포넌트'},
  {path: '/userfeedback', label: '사용자 피드백', description: 'v-alert, v-dialog, v-snackbar 등 메시지/로딩 컴포넌트'},
  {path: '/interaction', label: '데이터/인터랙션 컴포넌트', description: 'v-data-table, v-carousel, v-stepper 등'},
];
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-4">📚 Vuetify 컴포넌트 예제 모음</h2>
        </v-col>

        <v-col cols="12" md="6" v-for="route in routes" :key="route.name">
          <v-card class="pa-4 mb-4" outlined @click="$router.push(route.path)" hover>
            <v-card-title>{{ route.label }}</v-card-title>
            <v-card-subtitle>{{ route.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
