import { ref, type Component } from "vue";

import About from "@/views/About.vue";



export const routes:Record<string, Component>  = {
  "/": About,
};

export const currentPath = ref(window.location.pathname);

window.addEventListener("popstate", () => {
  currentPath.value = window.location.pathname;
});

export function navigate(path: string) {
  window.history.pushState({}, "", path);
  currentPath.value = path;
}

export function resolveRoute(path: string) {
  return routes[path] || routes["/"];
}
