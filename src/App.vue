<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
import router from "./router";
import ComputerMenuHeader from "@/components/ComputerMenuHeader.vue";
import ComputerFooter from "@/components/ComputerFooter.vue";

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
const isComputerDevice = screen.width >= 992 ? true : false;
console.log('isComputerDevice:', isComputerDevice)

</script>

<template>
  <!-- <button @click="openMenu" class="menu-btn" >
    <img src="/burger.svg" alt="burger-menu" />
  </button>
  <SideMenu @onClose="closeMenu" :isOpen="isMenuOpen" /> -->

  <div class="app_container__computer">
    <ComputerMenuHeader />
    <RouterView class="app_container__computer__content" />
    <ComputerFooter class="app_container__computer__footer" />
  </div>

  <!-- <RouterView /> -->
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

.app_container__computer {
  z-index: calc(var(--menu-z) - 1);
  width: 100%;
}

.app_container__computer__footer {
  border-top: 2px solid var(--color-dark);
  position: absolute;
  bottom: 0;
  padding-top: 8px;
}

.app_container__computer__content {
  position: absolute;
  top: 250px;
  height: calc(100% - (260px + 48px));
}
</style>
