<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
import router from "./router";

let isMenuOpen = ref<boolean>(false);

watch(router.currentRoute, () => {
  isMenuOpen.value = false;
});

const openMenu = () => {
  isMenuOpen.value = true;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <button @click="openMenu" class="menu-btn">
    <img src="/burger.svg" alt="burger-menu" />
  </button>
  <SideMenu @onClose="closeMenu" :isOpen="isMenuOpen" />

  <RouterView />
</template>

<style scoped>
.menu-btn {
  z-index: calc(var(--menu-z) - 1);
  position: absolute;
  padding: 0;
  top: 16px;
  left: 32px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
