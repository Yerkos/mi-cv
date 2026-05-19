<script setup lang="ts">
import { onMounted, ref } from "vue";

import Header from "@/components/Header.vue";
// import * as Routing from '@/router/routing.js';
import { currentPath, resolveRoute } from "@/router/routing";
import { computed } from "vue";

const currentView = computed(() => {
  return resolveRoute(currentPath.value);
});

const isDark = ref(false);
const applyTheme = (dark: boolean) => {
  const root = document.documentElement;

  if (dark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};
const toggleDark = () => {
  isDark.value = !isDark.value;
  applyTheme(isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  const saved = localStorage.getItem("theme");

  if (saved) {
    isDark.value = saved === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme(isDark.value);
});
</script>

<template>
  <Header @toggleDark="toggleDark" />
  <component :is="currentView" />
</template>
