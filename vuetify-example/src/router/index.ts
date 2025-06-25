import { createRouter, createWebHistory } from 'vue-router'
import ButtonExample from "@/views/ButtonExample.vue";
import DataInteractionExample from "@/views/DataInteractionExample.vue";
import FormExample from "@/views/FormExample.vue";
import InputAndSelectionExample from "@/views/InputAndSelectionExample.vue";
import NavigationExample from "@/views/NavigationExample.vue";
import UserFeedbackAndStatusExample from "@/views/UserFeedbackAndStatusExample.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonExample,
    },
    {
      path: '/interaction',
      name: 'interaction',
      component: DataInteractionExample,
    },
    {
      path: '/form',
      name: 'form',
      component: FormExample,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonExample,
    },
    {
      path: '/inputselection',
      name: 'inputSelection',
      component: InputAndSelectionExample,
    },
    {
      path: '/navigation',
      name: 'naviagation',
      component: NavigationExample,
    },
    {
      path: '/userfeedback',
      name: 'userFeedback',
      component: UserFeedbackAndStatusExample,
    }

  ],
})

export default router
