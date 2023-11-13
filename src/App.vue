<template>
  <NavMenu :nav-item="navItems" />
  <RouterView />
</template>

<script lang="ts" setup>
import NavMenu from './components/NavMenu.vue';
import { RouterView } from 'vue-router';

import { onMounted, ref } from "vue";

import { useStore } from "@/stores";

const store = useStore();

onMounted(() => {
  store.getListFromLocalStorage();
});

const navItems = ref([
  {
    id: 1,
    to: "/form",
    name: "Form"
  },
  {
    id: 2,
    to: "/todo",
    name: "Todo List"
  },
  {
    id: 3,
    to: "/done",
    name: "Done List"
  }
]);
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 960px;
    margin: 60px auto 0;
  }
</style>
