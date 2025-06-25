<template>
  <v-app>

    <!-- 🔹 v-app-bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>v-app-bar</v-toolbar-title>
    </v-app-bar>

    <!-- 🔹 v-navigation-drawer -->
    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-title>v-navigation-drawer</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-4">

        <!-- 🔹 v-tabs + v-tab-item -->
        <v-tabs v-model="tab" class="mb-4">
          <v-tab value="tab-1">탭 1</v-tab>
          <v-tab value="tab-2">탭 2</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="tab-1">
            <div>v-tab-item - 첫 번째 탭</div>
          </v-window-item>
          <v-window-item value="tab-2">
            <div>v-tab-item - 두 번째 탭</div>
          </v-window-item>
        </v-window>

        <!-- 🔹 v-toolbar -->
        <v-toolbar class="mt-8" color="grey-lighten-4">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-toolbar-title>v-toolbar</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

      </v-container>
    </v-main>

    <!-- 🔹 v-footer -->
    <v-footer app padless color="primary" dark>
      <v-col class="text-center">v-footer</v-col>
    </v-footer>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const tab = ref('tab-1')
</script>
